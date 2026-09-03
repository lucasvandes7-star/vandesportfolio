import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { heroSources } from '../../lib/media';
import { whatsappLink, LOCATION } from '../../data/contact';
import { container, lineWipe, T } from '../../lib/motion';

/**
 * O título atravessa as duas colunas e a foto encosta por baixo dele, em vez
 * do par "texto à esquerda / imagem à direita". Sem botões: os dois destinos
 * são links de texto sublinhados, que pesam menos e leem como editorial.
 */
const TITLE_LINES = ['Sites, interfaces', 'e sistemas que'];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -26]);

  return (
    <section
      id="topo"
      ref={ref}
      className="on-paper relative isolate min-h-[100dvh] overflow-x-clip bg-paper text-onpaper-hi"
    >
      <div className="shell relative flex min-h-[100dvh] flex-col justify-between pb-[max(9vw,68px)] pt-[104px] lg:pt-[112px]">
        {/* Bloco superior: identificação e título */}
        <motion.div
          initial={reduce ? false : 'hidden'}
          animate="show"
          variants={container}
        >
          <motion.div
            variants={lineWipe}
            className="mb-10 flex items-baseline gap-4 border-b border-hairp pb-4 lg:mb-14"
          >
            <span className="label text-onpaper-low">Desenvolvedor front-end</span>
            <span className="label ml-auto text-onpaper-low">Portfólio 2026</span>
          </motion.div>

          <h1 className="text-display text-onpaper-hi">
            {TITLE_LINES.map((line) => (
              <span key={line} className="block overflow-hidden pb-[0.04em]">
                <motion.span variants={lineWipe} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
            {/* A última linha divide espaço com a foto, criando a tensão da composição */}
            <span className="grid grid-cols-1 items-end gap-x-8 sm:grid-cols-12">
              <span className="block overflow-hidden pb-[0.04em] sm:col-span-7">
                <motion.span variants={lineWipe} className="block">
                  a empresa usa.
                </motion.span>
              </span>
            </span>
          </h1>
        </motion.div>

        {/* Bloco inferior: foto à esquerda, texto e links à direita */}
        <div className="mt-12 grid grid-cols-1 items-end gap-y-10 sm:grid-cols-12 sm:gap-x-8 lg:mt-0">
          <motion.div
            style={reduce ? undefined : { y }}
            className="sm:col-span-5 lg:col-span-4"
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative aspect-[4/5] w-[62%] overflow-hidden bg-bg sm:w-full sm:max-w-[290px]"
            >
              <picture>
                <source type="image/avif" srcSet={heroSources.avif} sizes="(max-width: 639px) 62vw, 30vw" />
                <source type="image/webp" srcSet={heroSources.webp} sizes="(max-width: 639px) 62vw, 30vw" />
                <img
                  src={heroSources.fallback}
                  alt="Retrato de Lucas Vandes"
                  width={heroSources.width}
                  height={heroSources.height}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  className="h-full w-full object-cover object-[center_18%]"
                />
              </picture>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...T, delay: 0.45 }}
            className="sm:col-span-7 sm:col-start-6 lg:col-span-6 lg:col-start-7"
          >
            <p className="max-w-[40ch] text-[16px] leading-[1.75] text-onpaper-mid sm:text-[17px]">
              Trabalho sozinho e direto com quem contrata. Os doze projetos abaixo estão
              publicados e você pode abrir todos agora.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
              <a
                href="#projetos"
                className="text-[15px] text-onpaper-hi underline decoration-hairp-strong decoration-1 underline-offset-[6px] transition-colors duration-300 hover:decoration-onpaper-hi"
              >
                Ver os projetos
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-onpaper-mid underline decoration-hairp decoration-1 underline-offset-[6px] transition-colors duration-300 hover:text-onpaper-hi hover:decoration-onpaper-hi"
              >
                Falar comigo
              </a>
              <span className="label ml-auto hidden text-onpaper-low lg:block">{LOCATION}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Transição diagonal para a zona escura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[7vw] max-h-[104px] min-h-[36px] bg-bg [clip-path:polygon(0_100%,100%_0,100%_100%)]"
      />
    </section>
  );
}
