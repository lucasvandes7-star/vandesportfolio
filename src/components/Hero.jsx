import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { whatsappLink } from '../data/contact';
import { PrimaryAction, SecondaryAction } from './ui/primitives';

/* Projetos reais exibidos na moldura do hero — todos no ar e abríveis. */
const showcase = [
  {
    src: '/covers/veritas-crm.png',
    label: 'Veritas Contábil — CRM',
    href: 'https://veritas-crm-five.vercel.app',
    external: true,
  },
  {
    src: '/covers/sorriso-fiel.png',
    label: 'Sorriso Fiel — Clínica',
    href: '/sorriso-fiel.html',
    external: false,
  },
  {
    src: '/covers/aurora-viagens.png',
    label: 'Aurora Viagens — Web app',
    href: '/aurora-viagens/',
    external: false,
  },
];

export default function Hero() {
  const [active, setActive] = React.useState(0);

  // Alterna a captura exibida na moldura
  React.useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const t = setInterval(() => setActive((i) => (i + 1) % showcase.length), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36">
      {/* Halo roxo — único momento de brilho da página */}
      <div className="violet-halo pointer-events-none absolute inset-x-0 top-0 h-[560px]" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Coluna de texto */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-pill border border-[var(--line-soft)] bg-white/[0.03] px-3.5 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-pill bg-violet-400 animate-pulse-dot" aria-hidden="true" />
            <span className="kicker">Sites · CRMs · Automações</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-[clamp(2.6rem,6.2vw,3.9rem)] font-semibold leading-[1.02]"
          >
            Seu concorrente não é melhor.{' '}
            <span className="whitespace-nowrap text-violet-400 [text-decoration-color:theme(colors.violet.600)] [text-decoration-thickness:3px] [text-underline-offset:9px] underline decoration-solid">
              O site dele é
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-[62ch] text-[17px] leading-[1.65] text-content-mid"
          >
            Eu construo o site, o CRM e as automações da sua empresa — sob medida, sem template
            e sem mensalidade por usuário. Você fala direto comigo, não com um intermediário,
            e o código fica sendo seu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <PrimaryAction
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar no WhatsApp
            </PrimaryAction>
            <SecondaryAction href="#projetos">Ver os projetos</SecondaryAction>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-8 flex items-start gap-2.5 text-[14.5px] leading-relaxed text-content-low"
          >
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-violet-500" aria-hidden="true" />
            <span>
              Sem mockup de projeto que não existe. Tudo que está aqui no site foi entregue,
              está no ar e você pode abrir agora mesmo.
            </span>
          </motion.p>
        </div>

        {/* Moldura de navegador com projetos reais */}
        <motion.figure
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* A moldura inteira é um link para o projeto no ar — é o que a copy promete */}
          <a
            href={showcase[active].href}
            target={showcase[active].external ? '_blank' : undefined}
            rel={showcase[active].external ? 'noopener noreferrer' : undefined}
            className="group block overflow-hidden rounded-card border border-[var(--line-soft)] bg-ink-800 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.9)] transition-colors duration-400 ease-spring hover:border-[var(--line-mid)]"
          >
            {/* Barra da janela, com o endereço do projeto */}
            <div className="flex items-center gap-3 border-b border-[var(--line-soft)] bg-white/[0.02] px-4 py-3">
              <span className="truncate text-[12.5px] text-content-low">
                {showcase[active].label}
              </span>
              <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 text-[12.5px] text-violet-300">
                Abrir projeto
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-400 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>

            <div className="relative aspect-[16/11] bg-ink-900">
              {showcase.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={`Captura do projeto ${s.label}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-300 ease-spring"
                  style={{ opacity: i === active ? 1 : 0 }}
                />
              ))}
            </div>
          </a>

          {/* Indicadores */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {showcase.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Mostrar ${s.label}`}
                aria-current={i === active}
                className={`h-1.5 rounded-pill transition-all duration-500 ease-spring ${
                  i === active ? 'w-7 bg-violet-500' : 'w-3 bg-white/15 hover:bg-white/25'
                }`}
              />
            ))}
          </div>

          <figcaption className="sr-only">
            Capturas de projetos reais desenvolvidos por Lucas Vandes.
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
