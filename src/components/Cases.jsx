import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2, Globe2, LayoutDashboard, Workflow } from 'lucide-react';
import { projectsData, automationData } from '../data/projects';
import { SectionHeader } from './ui/primitives';

const groups = [
  {
    key: 'site',
    title: 'Sites',
    icon: Globe2,
    description: 'Sites institucionais, landing pages e web apps. Todos no ar — clique para abrir.',
  },
  {
    key: 'crm',
    title: 'CRMs e dashboards',
    icon: LayoutDashboard,
    description: 'Sistemas de gestão e painéis analíticos feitos sob medida para a operação do cliente.',
  },
  {
    key: 'automacao',
    title: 'Automações',
    icon: Workflow,
    description: 'Fluxos que tiram a tarefa repetitiva da mão de alguém.',
  },
];

function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target={project.external ? '_blank' : undefined}
      rel={project.external ? 'noopener noreferrer' : undefined}
      className="surface group flex h-full flex-col overflow-hidden rounded-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-900">
        {project.image && (
          <img
            src={project.image}
            alt={`Captura do projeto ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-spring group-hover:scale-[1.04]"
          />
        )}
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-pill border border-[var(--line-soft)] bg-ink-900/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4 text-content-hi" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="kicker">{project.sector}</span>
        <h4 className="mt-2.5 text-[17px] font-semibold leading-snug text-content-hi">
          {project.title}
        </h4>
        <p className="mt-2.5 text-[14.5px] leading-[1.6] text-content-mid">{project.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-pill border border-[var(--line-soft)] px-2.5 py-1 text-[11.5px] text-content-low"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}

export default function Cases() {
  return (
    <section id="projetos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="Projetos"
          badgeIcon={FolderGit2}
          title={<>Trabalho entregue, no ar, aberto para você conferir.</>}
        >
          Nada de case fictício ou mockup de projeto que não existe. Cada item abaixo é um
          trabalho real — clique e veja funcionando.
        </SectionHeader>

        <div className="mt-14 flex flex-col gap-14">
          {groups.map((group) => {
            const items =
              group.key === 'automacao'
                ? automationData
                : projectsData.filter((p) => p.category === group.key);
            const Icon = group.icon;

            return (
              <div key={group.key}>
                <div className="mb-6 border-b border-[var(--line-soft)] pb-4">
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-[18px] w-[18px] text-violet-400" aria-hidden="true" />
                    <h3 className="text-2xl font-semibold">{group.title}</h3>
                    {items.length > 0 && (
                      <span className="ml-1 rounded-pill border border-[var(--line-soft)] px-2.5 py-0.5 text-[12px] text-content-low">
                        {items.length}
                      </span>
                    )}
                  </div>
                  <p className="mt-2.5 max-w-[62ch] text-[15px] leading-[1.6] text-content-mid">
                    {group.description}
                  </p>
                </div>

                {items.length > 0 ? (
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((project, i) => (
                      <motion.li
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.55, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <ProjectCard project={project} />
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <div className="rounded-card border border-dashed border-[var(--line-mid)] bg-white/[0.015] px-8 py-12 text-center">
                    <p className="text-[15px] text-content-mid">
                      As automações que eu construo rodam dentro da operação de cada cliente, então
                      não dá para abrir um link público.
                    </p>
                    <p className="mt-2 text-[14.5px] text-content-low">
                      Em breve: exemplos dos fluxos, sem identificar as empresas.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
