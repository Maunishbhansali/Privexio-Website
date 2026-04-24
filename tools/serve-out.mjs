import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(process.cwd(), 'out');
const PORT = Number(process.env.PORT || 3000);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
};

function safeJoin(root, requestPath) {
  const decoded = decodeURIComponent(requestPath);
  const normalized = path.posix.normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, '');
  const joined = path.join(root, normalized);
  const resolved = path.resolve(joined);
  if (!resolved.startsWith(root)) return null;
  return resolved;
}

function existsFile(p) {
  try {
    const stat = fs.statSync(p);
    return stat.isFile() ? stat : null;
  } catch {
    return null;
  }
}

function resolveFilePath(reqPath) {
  if (reqPath === '/' || reqPath === '') {
    const indexPath = path.join(ROOT, 'index.html');
    const indexStat = existsFile(indexPath);
    return indexStat ? { filePath: indexPath, stat: indexStat } : null;
  }

  // Direct asset request.
  const direct = safeJoin(ROOT, reqPath.replace(/^\//, ''));
  if (!direct) return null;
  const directStat = existsFile(direct);
  if (directStat) return { filePath: direct, stat: directStat };

  // Clean route: /about -> /about.html
  if (!path.posix.extname(reqPath)) {
    const htmlCandidate = safeJoin(ROOT, `${reqPath.replace(/^\//, '')}.html`);
    if (!htmlCandidate) return null;
    const htmlStat = existsFile(htmlCandidate);
    if (htmlStat) return { filePath: htmlCandidate, stat: htmlStat };
  }

  // Fallback.
  const notFound = path.join(ROOT, '404.html');
  const notFoundStat = existsFile(notFound);
  return notFoundStat ? { filePath: notFound, stat: notFoundStat, notFound: true } : null;
}

const server = http.createServer((req, res) => {
  let pathname = '/';
  try {
    // WHATWG URL parsing is robust and always yields a pathname.
    const parsed = new URL(req.url || '/', 'http://localhost');
    pathname = parsed.pathname || '/';
  } catch {
    pathname = '/';
  }

  const resolved = resolveFilePath(pathname);
  if (!resolved) {
    res.statusCode = 404;
    res.end('Not found');
    return;
  }

  const { filePath, stat, notFound } = resolved;
  if (!filePath || !stat) {
    res.statusCode = 500;
    res.end('Server error');
    return;
  }
  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';

  res.statusCode = notFound ? 404 : 200;
  res.setHeader('Content-Type', mime);
  res.setHeader('Content-Length', stat.size);
  res.setHeader('Cache-Control', ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable');

  const stream = fs.createReadStream(filePath);
  stream.on('error', () => {
    res.statusCode = 500;
    res.end('Server error');
  });
  stream.pipe(res);
});

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Serving ${ROOT} on http://localhost:${PORT}`);
});
