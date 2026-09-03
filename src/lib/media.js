/**
 * Monta os caminhos dos derivados gerados por scripts/optimize-images.mjs,
 * para os arquivos de dados não repetirem seis URLs por projeto.
 */

const COVER_WIDTHS = [640, 1200];
const HERO_WIDTHS = [480, 720, 1024];

const srcset = (paths) => paths.map(([src, w]) => `${src} ${w}w`).join(', ');

/**
 * Fontes responsivas de uma capa de projeto.
 * @param {string} id  nome do arquivo sem extensão em public/covers/
 * @param {string} fallback  caminho do original, usado por navegadores sem AVIF/WebP
 */
export function coverSources(id, fallback) {
  return {
    avif: srcset(COVER_WIDTHS.map((w) => [`/covers/opt/${id}-${w}.avif`, w])),
    webp: srcset(COVER_WIDTHS.map((w) => [`/covers/opt/${id}-${w}.webp`, w])),
    fallback,
    width: 1200,
    height: 800,
  };
}

/** Fontes responsivas do retrato da hero (já em escala de cinza no arquivo). */
export const heroSources = {
  avif: srcset(HERO_WIDTHS.map((w) => [`/img/hero-${w}.avif`, w])),
  webp: srcset(HERO_WIDTHS.map((w) => [`/img/hero-${w}.webp`, w])),
  fallback: '/img/hero-1024.webp',
  width: 620,
  height: 571,
};
