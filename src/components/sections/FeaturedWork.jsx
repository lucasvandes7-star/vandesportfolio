import React from 'react';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import Media from '../ui/Media';
import { featuredProjects, indexProjects } from '../../data/projects';

/**
 * Quatro composições que não se repetem: larguras, proporções de imagem e
 * posição do texto mudam a cada case. O terceiro sangra além do container,
 * quebrando a coluna e dando o ponto alto da seção.
 */
const CASES = [
  {
    media: 'lg:col-span-7',
    text: 'lg:col-span-4 lg:col-start-9 lg:self-end',
    ratio: '4/3',
    sizes: '(max-width: 1023px) 100vw, 55vw',
  },
  {
    media: 'lg:col-span-6 lg:col-start-7 lg:row-start-1',
    text: 'lg:col-span-4 lg:row-start-1 lg:self-center',
    ratio: '3/2',
    sizes: '(max-width: 1023px) 100vw, 48vw',
  },
  {
    media: 'lg:col-span-12',
    text: 'lg:col-span-5 lg:col-start-8',
    ratio: '21/9',
    sizes: '100vw',
    bleed: true,
  },
  {
    media: 'lg:col-span-5 lg:col-start-4',
    text: 'lg:col-span-3 lg:col-start-10 lg:self-end',
    ratio: '4/5',
    sizes: '(max-width: 1023px) 100vw, 40vw',
  },
];

function Meta({ project, index }) {
  return (
    <>
      <div className="flex items-baseline gap-4">
        <span className="label text-ink-low">{String(index + 1).padStart(2, '0')}</span>
        <span className="label text-ink-low">{project.year}</span>
      </div>
      <h3 className="mt-4 font-display text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.1] tracking-[-0.03em] text-ink-hi">
        {project.title}
      </h3>
      <p className="mt-2 text-[13.5px] text-ink-low">
        {project.sector}, {project.tag.toLowerCase()}
      </p>
      <p className="mt-5 max-w-[44ch] text-[15px] leading-[1.7] text-ink-mid">
        {project.description}
      </p>
      <p className="mt-5 text-[13px] text-ink-low">{project.tech.join(', ')}</p>
      <span className="mt-6 inline-block text-[14.5px] text-ink-hi underline decoration-hair-strong decoration-1 underline-offset-[6px] transition-colors duration-300 group-hover:decoration-ink-hi">
        Abrir projeto
      </span>
    </>
  );
}

export default function FeaturedWork() {
  return (
    <Section id="projetos">
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-x-8">
        <Reveal as="h2" className="text-section text-balance lg:col-span-6">
          Doze projetos no ar, todos abertos
        </Reveal>
        <Reveal as="p" className="max-w-[40ch] self-end text-[15px] leading-[1.7] text-ink-mid lg:col-span-4 lg:col-start-9">
          Nada de case fictício. Clique em qualquer um e veja funcionando.
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col gap-20 lg:mt-24 lg:gap-28">
        {featuredProjects.map((project, i) => {
          const c = CASES[i % CASES.length];
          return (
            <a
              key={project.id}
              href={project.link}
              target={project.external ? '_blank' : undefined}
              rel={project.external ? 'noopener noreferrer' : undefined}
              className="group grid grid-cols-1 items-start gap-y-7 lg:grid-cols-12 lg:gap-x-8"
            >
              <div className={c.bleed ? `${c.media} lg:-mx-[clamp(12px,2.5vw,40px)]` : c.media}>
                <Media
                  sources={project.cover}
                  alt={`Interface do projeto ${project.title}`}
                  ratio={c.ratio}
                  sizes={c.sizes}
                  grayscaleIdle
                />
              </div>
              <Reveal className={c.text}>
                <Meta project={project} index={i} />
              </Reveal>
            </a>
          );
        })}
      </div>

      {/* Índice: linhas de texto, sem imagem, para não repetir o formato de case */}
      <div className="mt-24 lg:mt-32">
        <Reveal as="h3" className="label mb-7 text-ink-low">
          Os outros oito
        </Reveal>
        <ul className="border-t border-hair">
          {indexProjects.map((project) => (
            <li key={project.id}>
              <a
                href={project.link}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-b border-hair py-5 sm:grid-cols-12"
              >
                <span className="font-display text-[clamp(1rem,1.8vw,1.35rem)] leading-tight tracking-[-0.02em] text-ink-hi transition-opacity duration-300 group-hover:opacity-60 sm:col-span-5">
                  {project.title}
                </span>
                <span className="hidden text-[13.5px] text-ink-mid sm:col-span-4 sm:block">
                  {project.sector}
                </span>
                <span className="label text-right text-ink-low sm:col-span-3">{project.year}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
