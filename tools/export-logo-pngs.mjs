import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const brandDir = path.join(root, 'public', 'brand');
const outputDir = path.join(brandDir, 'png');

const fullLogoExports = [
  { source: 'privexio-logo-full-light.svg', name: 'privexio-logo-full-light', widths: [512, 1024, 2048] },
  { source: 'privexio-logo-full-dark.svg', name: 'privexio-logo-full-dark', widths: [512, 1024, 2048] },
  { source: 'privexio-logo-full-white-bg.svg', name: 'privexio-logo-full-white-bg', widths: [512, 1024, 2048] },
  { source: 'privexio-logo-horizontal-teal.svg', name: 'privexio-logo-horizontal-teal', widths: [512, 1024, 2048] },
];

const markExports = [
  { source: 'privexio-mark-teal.svg', name: 'privexio-mark-teal', sizes: [64, 128, 256, 512, 1024] },
  { source: 'privexio-mark-white-bg.svg', name: 'privexio-mark-white-bg', sizes: [64, 128, 256, 512, 1024] },
  { source: 'privexio-mark-dark-bg.svg', name: 'privexio-mark-dark-bg', sizes: [64, 128, 256, 512, 1024] },
];

await fs.rm(outputDir, { recursive: true, force: true });
await fs.mkdir(outputDir, { recursive: true });

for (const logo of fullLogoExports) {
  const sourcePath = path.join(brandDir, logo.source);

  for (const width of logo.widths) {
    await sharp(sourcePath, { density: 240 })
      .resize({ width })
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(path.join(outputDir, `${logo.name}-${width}w.png`));
  }
}

for (const mark of markExports) {
  const sourcePath = path.join(brandDir, mark.source);

  for (const size of mark.sizes) {
    await sharp(sourcePath, { density: 240 })
      .resize(size, size)
      .png({ quality: 100, compressionLevel: 9 })
      .toFile(path.join(outputDir, `${mark.name}-${size}x${size}.png`));
  }
}

await fs.writeFile(
  path.join(outputDir, 'README.txt'),
  `Privexio PNG Logo Pack

Included PNG exports:
- Full horizontal logo: 512w, 1024w, 2048w
- Standalone icon/mark: 64x64, 128x128, 256x256, 512x512, 1024x1024
- Transparent, white-background, dark-background, and teal variants

Recommended usage:
- 64x64 / 128x128: favicons and small UI usage
- 256x256 / 512x512: profile images, app icons, directory uploads
- 1024x1024: high-resolution square uploads
- 1024w / 2048w full logo: proposals, websites, presentations, and print-ready exports
`
);

console.log(`PNG logo exports created in ${outputDir}`);
