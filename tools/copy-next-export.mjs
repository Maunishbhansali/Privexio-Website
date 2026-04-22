import { cpSync, existsSync, rmSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const exportDir = path.join(root, 'out');
const legacyDistDir = path.join(root, 'dist');

if (!existsSync(exportDir)) {
  throw new Error('Next export output was not found at ./out.');
}

rmSync(legacyDistDir, { recursive: true, force: true });
cpSync(exportDir, legacyDistDir, { recursive: true });
