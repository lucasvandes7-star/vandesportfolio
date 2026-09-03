import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { heroSources } from '../../lib/media';
import { whatsappLink, LOCATION } from '../../data/contact';
import { container, lineWipe, T } from '../../lib/motion';
import Button from '../ui/Button';

const TITLE_LINES = ['Interfaces que', 'transformam', 'ideias em produtos.'];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  // Parallax discreto no bloco da foto. useScroll evita listener de scroll.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -28]);

  return (
    <section
      id="topo"
      ref={ref}
      className="on-paper relative isolate min-h-[100dvh] overflow-x-clip bg-paper text-onpaper-hi"
    >
      {/* Formas de fundo: círculo de baixo contraste e hairlines verticais */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-[10%] top-[6%] h-[46vw] w-[46vw] rounded-full bg-paper-soft opacity-60" />
        <div className="absolute inset-y-0 left-[18%] hidden w-px bg-hairp lg:block" />
        <div className="absolute inset-y-0 right-[26%] hidden w-px bg-hairp lg:block" />
      </div>

      <div className="shell relative grid min-h-[100dvh] grid-cols-1 items-center gap-y-14 pb-[max(9vw,72px)] pt-[104px] lg:grid-cols-12 lg:gap-x-8 lg:pb-[max(9vw,110px)] lg:pt-[88px]">
        {/* Coluna de texto */}
        <motion.div
          initial={reduce ? false : 'hidden'}
          animate="show"
          variants={container}
          className="lg:col-span-6 lg:pr-6"
        >
          <motion.div variants={lineWipe} className="mb-8 flex items-center gap-3 text-onpaper-low">
            <span className="label">01</span>
            <span aria-hidden="true" className="h-px w-8 bg-hairp-strong" />
            <span className="label">Desenvolvedor front-end</span>
          </motion.div>

          <h1 className="text-display text-onpaper-hi">
            {TITLE_LINES.map((line) => (
              <span key={line} className="block overflow-hidden pb-[0.06em]">
                <motion.span variants={lineWipe} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            variants={lineWipe}
            className="mt-7 max-w-[32rem] text-[17px] leading-[1.7] text-onpaper-mid sm:text-[18px]"
          >
            Desenvolvo sites, interfaces e sistemas de gestão combinando design,
            código e a operação real de quem vai usar.
          </motion.p>

          <motion.div variants={lineWipe} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#projetos" tone="paper" variant="solid" size="lg" icon={ArrowDown}>
              Ver projetos
            </Button>
            <Button
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              tone="paper"
              variant="outline"
              size="lg"
            >
              Falar comigo
            </Button>
          </motion.div>
        </motion.div>

        {/* Bloco escuro com a foto. O fundo preto do retrato funde com o bloco,
            então a foto não parece colada dentro de um card. */}
        <motion.div
          style={reduce ? undefined : { y }}
          className="relative lg:col-span-6 lg:col-start-7"
        >
          <div className="relative ml-auto w-[calc(100%+clamp(24px,5vw,80px))] lg:w-[calc(100%+clamp(24px,5vw,80px)-40px)]">
            <motion.div
              initial={reduce ? false : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="mask-fade-b relative ml-auto aspect-[3/4] w-[74%] max-w-[300px] overflow-hidden rounded-l-media bg-bg sm:w-[52%] sm:max-w-[330px] lg:aspect-[5/6] lg:w-[86%] lg:max-w-none lg:max-h-[60vh]"
            >
              <picture>
                <source
                  type="image/avif"
                  srcSet={heroSources.avif}
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
                <source
                  type="image/webp"
                  srcSet={heroSources.webp}
                  sizes="(max-width: 1023px) 100vw, 50vw"
                />
                <img
                  src={heroSources.fallback}
                  alt="Retrato de Lucas Vandes"
                  width={heroSources.width}
                  height={heroSources.height}
                  loading="eager"
                  decoding="sync"
                  fetchPriority="high"
                  className="h-full w-full object-cover object-[center_20%]"
                />
              </picture>
            </motion.div>

            <motion.p
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...T, delay: 0.75 }}
              className="label mt-5 pr-[clamp(24px,5vw,80px)] text-right text-onpaper-low"
            >
              {LOCATION}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Transição diagonal. Elemento irmão com a cor da próxima seção: a
          emenda some. Altura em vw mantém o ângulo constante em toda largura. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[9vw] max-h-[130px] min-h-[44px] bg-bg [clip-path:polygon(0_100%,100%_0,100%_100%)]"
      />
    </section>
  );
}
