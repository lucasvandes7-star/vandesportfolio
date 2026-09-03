import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Section from '../layout/Section';
import SectionIntro from '../ui/SectionIntro';
import Reveal from '../ui/Reveal';
import Media from '../ui/Media';
import HairRule from '../ui/HairRule';
import { featuredProjects, indexProjects } from '../../data/projects';
import { cn } from '../../lib/utils';

/**
 * Quatro composições diferentes, para os cases não virarem quatro fatias
 * iguais empilhadas. Os demais projetos vão para o índice compacto abaixo.
 */
const LAYOUTS = [
  { media: 'lg:col-span-7 lg:col-start-1', text: 'lg:col-span-4 lg:col-start-9', ratio: '3/2' },
  { media: 'lg:col-span-7 lg:col-start-6 lg:row-start-1', text: 'lg:col-span-4 lg:col-start-1 lg:row-start-1', ratio: '3/2' },
  { media: 'lg:col-span-12', text: 'lg:col-span-6', ratio: '21/9', wide: true },
  { media: 'lg:col-span-7 lg:col-start-3', text: 'lg:col-span-3 lg:col-start-10', ratio: '3/2' },
];

function ProjectMeta({ project }) {
  return (
    <>
      <div className="flex items-baseline gap-4">
        <span className="label text-ink-low">{String(featuredProjects.indexOf(project) + 1).padStart(2, '0')}</span>
        <span className="label text-ink-low">{project.year}</span>
      </div>
      <h3 className="mt-5 text-[clamp(1.6rem,2.4vw,2.1rem)] font-light leading-tight tracking-tight text-ink-hi">
        {project.title}
      </h3>
      <p className="mt-2 text-[14px] text-ink-mid">
        {project.sector} · {project.tag}
      </p>
      <p className="mt-5 max-w-[34rem] text-[15px] leading-[1.7] text-ink-mid">{project.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="rounded-btn border border-hair px-3 py-1.5 text-[12px] text-ink-mid">
            {t}
          </li>
        ))}
      </ul>
      <span className="mt-7 inline-flex items-center gap-2 text-[15px] text-ink-hi">
        Ver projeto
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </>
  );
}

export default function FeaturedWork() {
  return (
    <Section id="projetos">
      <SectionIntro
        index="03"
        label="Projetos selecionados"
        title="Trabalho entregue, no ar, aberto para você conferir."
        lead="Nada de case fictício ou mockup de projeto que não existe. Cada item abaixo está publicado e você pode abrir agora."
      />

      <div className="mt-16 flex flex-col gap-20 lg:gap-24">
        {featuredProjects.map((project, i) => {
          const layout = LAYOUTS[i % LAYOUTS.length];
          const external = project.external;

          return (
            <a
              key={project.id}
              href={project.link}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group grid grid-cols-1 items-center gap-y-8 lg:grid-cols-12 lg:gap-x-12"
            >
              <div className={cn(layout.media)}>
                <Media
                  sources={project.cover}
                  alt={`Interface do projeto ${project.title}`}
                  ratio={layout.ratio}
                  sizes={layout.wide ? '(max-width: 1023px) 100vw, 90vw' : '(max-width: 1023px) 100vw, 58vw'}
                  grayscaleIdle
                />
              </div>
              <Reveal className={cn(layout.text)}>
                <ProjectMeta project={project} />
              </Reveal>
            </a>
          );
        })}
      </div>

      {/* Índice compacto: os demais projetos sem repetir o formato de case */}
      <div className="mt-24">
        <Reveal as="h3" className="label mb-8 text-ink-low">
          Outros projetos no ar
        </Reveal>
        <HairRule />
        <ul>
          {indexProjects.map((project) => (
            <li key={project.id}>
              <a
                href={project.link}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-6 border-b border-hair py-6 transition-colors duration-300 hover:bg-bg-alt"
              >
                <span className="flex-1 text-[clamp(1.05rem,2vw,1.35rem)] font-light text-ink-hi">
                  {project.title}
                </span>
                <span className="hidden text-[13.5px] text-ink-mid sm:block">{project.sector}</span>
                <span className="label w-14 text-right text-ink-low">{project.year}</span>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 text-ink-low transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink-hi"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
