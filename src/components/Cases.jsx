import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe2, LayoutDashboard, Workflow } from 'lucide-react';
import { projectsData, automationData } from '../data/projects';

const groups = [
  {
    key: 'site',
    title: 'Sites',
    icon: Globe2,
    description: 'Sites institucionais, landing pages e web apps desenvolvidos sob medida.',
  },
  {
    key: 'crm',
    title: 'CRMs & Dashboards',
    icon: LayoutDashboard,
    description: 'Sistemas de gestão, painéis analíticos e ferramentas internas sob medida.',
  },
  {
    key: 'automacao',
    title: 'Automações',
    icon: Workflow,
    description: 'Fluxos automatizados de processos, atendimento e integrações entre sistemas.',
  },
];

function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target={project.external ? '_blank' : undefined}
      rel={project.external ? 'noopener noreferrer' : undefined}
      className="cream-card group flex flex-col rounded-2xl overflow-hidden"
    >
      <div className="relative aspect-video overflow-hidden bg-[#0d0d0d]">
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#121212]/80 border border-[#EAE3D2]/20 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="h-4 w-4 text-[#EAE3D2]" />
        </div>
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#EAE3D2]/50">
            {project.sector}
          </span>
        </div>
        <h3 className="font-bebas text-2xl uppercase tracking-tight text-[#EAE3D2]">
          {project.title}
        </h3>
        <p className="text-sm text-[#EAE3D2]/70 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono uppercase tracking-wide text-[#EAE3D2]/60 border border-[#EAE3D2]/15 rounded-full px-2.5 py-1"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Cases() {
  return (
    <section id="cases" className="py-32 bg-[#121212] text-[#EAE3D2] relative">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-[#EAE3D2]/15 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#EAE3D2]/60">PORTFÓLIO DE TRABALHOS</span>
            <h2 className="font-bebas text-5xl sm:text-7xl uppercase tracking-tight text-[#EAE3D2] mt-2 text-stroke-hover cursor-pointer">
              CASES SELECIONADOS.
            </h2>
          </div>
          <p className="text-sm text-[#EAE3D2]/70 max-w-md font-sans">
            Navegue pelos projetos reais desenvolvidos para nossos clientes. Clique para acessar o site ou dashboard ao vivo.
          </p>
        </div>

        {/* Groups */}
        <div className="flex flex-col gap-24">
          {groups.map((group) => {
            const items = group.key === 'automacao'
              ? automationData
              : projectsData.filter((p) => p.category === group.key);

            const Icon = group.icon;

            return (
              <div key={group.key}>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="h-5 w-5 text-[#EAE3D2]/70" />
                  <h3 className="font-bebas text-3xl sm:text-4xl uppercase tracking-tight text-[#EAE3D2]">
                    {group.title}
                  </h3>
                </div>
                <p className="text-sm text-[#EAE3D2]/60 mb-10 max-w-xl">
                  {group.description}
                </p>

                {items.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((project, i) => (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-[#EAE3D2]/15 p-10 text-center text-sm text-[#EAE3D2]/50">
                    Em breve: cases de automação.
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
