import React from 'react';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import Media from '../ui/Media';
import { crmProjects } from '../../data/projects';

/**
 * Dois sistemas em composição desigual: o primeiro ocupa mais largura que o
 * segundo. Sem card e sem ícone de check nas funcionalidades — hairlines e
 * numeração dão a estrutura.
 */
const LAYOUT = [
  { wrap: 'lg:col-span-7', ratio: '16/10' },
  { wrap: 'lg:col-span-5', ratio: '4/3' },
];

export default function CrmWork() {
  return (
    <Section id="sistemas">
      <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-8">
        <Reveal as="h2" className="text-section lg:col-span-6">
          CRMs e sistemas de gestão
        </Reveal>
        <Reveal as="p" className="max-w-[42ch] self-end text-[15px] leading-[1.7] text-ink-mid lg:col-span-4 lg:col-start-9">
          Feitos para a operação de cada cliente: o fluxo é o que a empresa já usa, não
          o que o template impõe.
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 lg:mt-20 lg:grid-cols-12">
        {crmProjects.map((project, i) => {
          const l = LAYOUT[i % LAYOUT.length];
          return (
            <Reveal key={project.id} as="article" className={l.wrap}>
              <a
                href={project.link}
                target={project.external ? '_blank' : undefined}
                rel={project.external ? 'noopener noreferrer' : undefined}
                className="group block"
              >
                <Media
                  sources={project.cover}
                  alt={`Painel do sistema ${project.title}`}
                  ratio={l.ratio}
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  grayscaleIdle
                />

                <div className="mt-7 flex items-baseline justify-between gap-6 border-t border-hair pt-6">
                  <h3 className="text-sub text-ink-hi">{project.title}</h3>
                  <span className="label shrink-0 text-ink-low">{project.year}</span>
                </div>

                <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.7] text-ink-mid">
                  {project.description}
                </p>

                {project.features.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-[13.5px] text-ink-low">
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-6 text-[13.5px] text-ink-low">
                  {project.tech.join(', ')}
                </p>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
