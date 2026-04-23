import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const repoRoot = process.cwd();

const SOURCE_CANDIDATES = [
  path.join(repoRoot, 'public', 'brand', 'png', 'privexio-mark-teal-512x512.webp'),
  path.join(repoRoot, 'public', 'brand', 'png', 'privexio-mark-white-bg-512x512.webp'),
  path.join(repoRoot, 'public', 'brand', 'png', 'privexio-mark-dark-bg-512x512.webp'),
];

function findSource() {
  for (const candidate of SOURCE_CANDIDATES) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error(`No source logo found. Tried: ${SOURCE_CANDIDATES.join(', ')}`);
}

function writeFile(filePath, buffer) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, buffer);
}

// Build a multi-image ICO that embeds PNG data (supported by modern browsers and Google).
function buildIcoFromPngBuffers(pngBuffersBySize) {
  const sizes = Object.keys(pngBuffersBySize)
    .map((size) => Number(size))
    .sort((a, b) => a - b);

  const count = sizes.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(count, 4); // count

  const dirEntries = Buffer.alloc(16 * count);
  let offset = header.length + dirEntries.length;
  const images = [];

  sizes.forEach((size, index) => {
    const png = pngBuffersBySize[size];
    const entryOffset = index * 16;

    dirEntries.writeUInt8(size === 256 ? 0 : size, entryOffset + 0); // width
    dirEntries.writeUInt8(size === 256 ? 0 : size, entryOffset + 1); // height
    dirEntries.writeUInt8(0, entryOffset + 2); // color count
    dirEntries.writeUInt8(0, entryOffset + 3); // reserved
    dirEntries.writeUInt16LE(1, entryOffset + 4); // planes
    dirEntries.writeUInt16LE(32, entryOffset + 6); // bit count
    dirEntries.writeUInt32LE(png.length, entryOffset + 8); // bytes in resource
    dirEntries.writeUInt32LE(offset, entryOffset + 12); // image offset

    images.push(png);
    offset += png.length;
  });

  return Buffer.concat([header, dirEntries, ...images]);
}

async function main() {
  const sourcePath = findSource();
  const outDir = path.join(repoRoot, 'public');

  const pngSizes = [16, 32, 48, 180, 192, 512];
  const pngBuffers = {};

  for (const size of pngSizes) {
    // Contain + transparent background keeps the mark intact even if the source isn't square.
    const png = await sharp(sourcePath)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toBuffer();

    pngBuffers[size] = png;
  }

  writeFile(path.join(outDir, 'favicon-16x16.png'), pngBuffers[16]);
  writeFile(path.join(outDir, 'favicon-32x32.png'), pngBuffers[32]);
  writeFile(path.join(outDir, 'apple-touch-icon.png'), pngBuffers[180]);
  writeFile(path.join(outDir, 'android-chrome-192x192.png'), pngBuffers[192]);
  writeFile(path.join(outDir, 'android-chrome-512x512.png'), pngBuffers[512]);

  const ico = buildIcoFromPngBuffers({
    16: pngBuffers[16],
    32: pngBuffers[32],
    48: pngBuffers[48],
  });
  writeFile(path.join(outDir, 'favicon.ico'), ico);

  const manifest = {
    name: 'Privexio',
    short_name: 'Privexio',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#0f172a',
    background_color: '#ffffff',
    display: 'standalone',
  };
  writeFile(path.join(outDir, 'site.webmanifest'), Buffer.from(JSON.stringify(manifest, null, 2), 'utf8'));

  console.log(`Generated favicons from ${path.relative(repoRoot, sourcePath)} into public/`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

