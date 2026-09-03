/**
 * Variantes de animação compartilhadas.
 * Todo componente que anima importa daqui, para o ritmo da página ser um só.
 */

export const T = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };
export const T_FAST = { duration: 0.45, ease: [0.16, 1, 0.3, 1] };

/** Entrada padrão de blocos de conteúdo. */
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: T },
};

/** Revela imagens de baixo para cima, como uma cortina. */
export const clipIn = {
  hidden: { opacity: 0, clipPath: 'inset(0 0 100% 0)' },
  show: {
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

/** Linha de título subindo de dentro de um pai com overflow hidden. */
export const lineWipe = {
  hidden: { opacity: 0, y: '0.9em' },
  show: { opacity: 1, y: 0, transition: T },
};

/** Pai que escalona os filhos. */
export const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const containerTight = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

/**
 * Viewport padrão. `amount: 0.15` dispara quando 15% do elemento aparece.
 * Não use margin negativa aqui: em elementos altos (as mídias dos cases) ela
 * encolhe demais a área de detecção e o reveal nunca dispara, deixando a
 * imagem presa em opacity 0.
 */
export const VIEWPORT = { once: true, amount: 0.15 };
