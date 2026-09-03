import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import Section from '../layout/Section';
import SectionIntro from '../ui/SectionIntro';
import Reveal from '../ui/Reveal';
import Surface from '../ui/Surface';
import Media from '../ui/Media';
import { crmProjects } from '../../data/projects';
import { containerTight, fadeUp } from '../../lib/motion';

/** Cards mais técnicos: funcionalidades, stack e status visíveis. */
export default function CrmWork() {
  return (
    <Section id="sistemas">
      <SectionIntro
        title="CRMs e sistemas de gestão"
        lead="Sistemas criados para organizar processos, dados e oportunidades da operação de cada cliente."
      />

      <Reveal variants={containerTight} className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {crmProjects.map((project) => (
          <Reveal key={project.id} as="article" variants={fadeUp} className="h-full">
            <Surface interactive className="group flex h-full flex-col overflow-hidden">
              <a
                href={project.link}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
                className="flex h-full flex-col"
              >
                <Media
                  sources={project.cover}
                  alt={`Painel do sistema ${project.title}`}
                  ratio="16/10"
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  reveal={false}
                  grayscaleIdle
                  className="rounded-none"
                />

                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[19px] font-normal text-ink-hi">{project.title}</h3>
                    <span className="label shrink-0 text-ink-low">{project.status}</span>
                  </div>

                  <p className="mt-4 text-[15px] leading-[1.7] text-ink-mid">{project.description}</p>

                  {project.features.length > 0 && (
                    <ul className="mt-7 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2.5 text-[13.5px] text-ink-mid">
                          <Check className="h-3.5 w-3.5 shrink-0 text-ink-low" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto flex items-end justify-between gap-4 border-t border-hair pt-6 [margin-top:2rem]">
                    <ul className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li key={t} className="rounded-btn border border-hair px-3 py-1.5 text-[12px] text-ink-mid">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-ink-low transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink-hi"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            </Surface>
          </Reveal>
        ))}
      </Reveal>
    </Section>
  );
}
