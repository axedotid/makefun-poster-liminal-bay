import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(outDir, { recursive: true });

const png = readFileSync(join(import.meta.dirname, 'poster.png'));
writeFileSync(join(outDir, 'entry.png'), png);
