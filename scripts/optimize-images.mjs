/**
 * Gera derivados AVIF + WebP responsivos com ffmpeg.
 *
 * Rode manualmente:  npm run images
 * NUNCA no build da Vercel — não há ffmpeg lá. Os derivados vão commitados
 * em public/img/ e public/covers/opt/.
 *
 * Requer ffmpeg no PATH com libwebp e libaom-av1.
 */
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdir, readdir, stat } from 'node:fs/promises';
import path from 'node:path';

const run = promisify(execFile);
const ROOT = path.resolve(import.meta.dirname, '..');

const HERO_SRC = path.join(ROOT, 'public', 'hero-person.jpg');
const HERO_OUT = path.join(ROOT, 'public', 'img');
const COVERS_SRC = path.join(ROOT, 'public', 'covers');
const COVERS_OUT = path.join(COVERS_SRC, 'opt');

const HERO_WIDTHS = [480, 720, 1024];
const COVER_WIDTHS = [640, 1200];

// A fonte é 1024x571 landscape com marca-d'água no canto inferior direito.
// Este crop enquadra o rosto num quadro ~1:1 e descarta a marca-d'água.
const HERO_CROP = 'crop=620:571:200:0';

const webpArgs = (q) => ['-c:v', 'libwebp', '-quality', String(q), '-compression_level', '6'];
const avifArgs = (crf, cpu) => [
  '-c:v', 'libaom-av1',
  '-crf', String(crf),
  '-cpu-used', String(cpu),
  '-still-picture', '1',
  '-f', 'avif',
];

async function encode(src, out, filters, codecArgs) {
  await run('ffmpeg', ['-y', '-loglevel', 'error', '-i', src, '-vf', filters, ...codecArgs, out]);
  const { size } = await stat(out);
  return size;
}

function kb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function buildHero() {
  await mkdir(HERO_OUT, { recursive: true });
  const original = (await stat(HERO_SRC)).size;
  console.log(`\nhero-person  (original ${kb(original)})`);

  for (const w of HERO_WIDTHS) {
    // format=gray grava o monocromático no arquivo: menor que o original
    // colorido e sem custo de filter: grayscale() em runtime.
    const filters = `${HERO_CROP},format=gray,scale=${w}:-2`;
    const avif = await encode(HERO_SRC, path.join(HERO_OUT, `hero-${w}.avif`), filters, avifArgs(34, 4));
    const webp = await encode(HERO_SRC, path.join(HERO_OUT, `hero-${w}.webp`), filters, webpArgs(82));
    console.log(`  ${String(w).padStart(4)}w   avif ${kb(avif).padStart(9)}   webp ${kb(webp).padStart(9)}`);
  }
}

async function buildCovers() {
  await mkdir(COVERS_OUT, { recursive: true });
  const files = (await readdir(COVERS_SRC, { withFileTypes: true }))
    .filter((e) => e.isFile() && /\.(png|webp|jpe?g)$/i.test(e.name))
    .map((e) => e.name)
    .sort();

  console.log(`\ncovers (${files.length} arquivos)`);
  let before = 0;
  let after = 0;

  for (const file of files) {
    const src = path.join(COVERS_SRC, file);
    const id = path.parse(file).name;
    before += (await stat(src)).size;

    for (const w of COVER_WIDTHS) {
      // Cor preservada: o monocromático é do portfólio, não dos trabalhos.
      // O grayscale em repouso é CSS, revertido no hover.
      const filters = `scale=${w}:-2`;
      const avif = await encode(src, path.join(COVERS_OUT, `${id}-${w}.avif`), filters, avifArgs(36, 5));
      const webp = await encode(src, path.join(COVERS_OUT, `${id}-${w}.webp`), filters, webpArgs(78));
      after += avif + webp;
    }
    console.log(`  ${id}`);
  }

  console.log(`\n  originais ${kb(before)} -> derivados ${kb(after)}`);
}

try {
  await run('ffmpeg', ['-version']);
} catch {
  console.error('ffmpeg não encontrado no PATH. Instale antes de rodar este script.');
  process.exit(1);
}

await buildHero();
await buildCovers();
console.log('\nPronto.\n');
