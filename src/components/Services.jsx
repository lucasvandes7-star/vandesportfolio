import React from 'react';
import { motion } from 'framer-motion';
import { Boxes, Layout, Database, BarChart3, Workflow, Plug, Gauge } from 'lucide-react';
import { SectionHeader, PrimaryAction } from './ui/primitives';
import { whatsappLink } from '../data/contact';

const services = [
  {
    icon: Layout,
    title: 'Sites e landing pages',
    desc: 'Site institucional ou página de captação, feita do zero para o seu negócio. Rápida no celular, encontrável no Google.',
  },
  {
    icon: Database,
    title: 'CRM sob medida',
    desc: 'Funil de vendas em Kanban, cadastro de clientes, tarefas e histórico. Feito para a sua operação, sem campo inútil.',
  },
  {
    icon: BarChart3,
    title: 'Dashboards e relatórios',
    desc: 'Faturamento, ticket médio, comissões e metas num painel só. O número que você olha toda semana, sem montar planilha.',
  },
  {
    icon: Workflow,
    title: 'Automação de processos',
    desc: 'A tarefa repetitiva sai da mão de alguém: envio de mensagem, lembrete, relatório e atualização de cadastro rodando sozinhos.',
  },
  {
    icon: Plug,
    title: 'Integrações',
    desc: 'WhatsApp, e-mail, planilhas e sistemas que você já usa passando a conversar entre si em vez de viverem separados.',
  },
  {
    icon: Gauge,
    title: 'Performance e SEO',
    desc: 'Site que carrega rápido, passa nos Core Web Vitals e tem a estrutura técnica que o Google precisa para indexar.',
  },
];

export default function Services() {
  return (
    <section id="solucoes" className="border-y border-[var(--line-soft)] bg-ink-850 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="O que eu faço"
          badgeIcon={Boxes}
          title={<>Site, sistema e automação — construídos pela mesma pessoa.</>}
        >
          Não é uma agência com camadas de intermediário. Você explica o problema para quem vai
          escrever o código, e o que sai é feito para a sua operação — não um template pintado
          com a sua cor.
        </SectionHeader>

        <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="surface rounded-card p-7 sm:p-8"
              >
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-[13px] bg-violet-600/[0.12] ring-1 ring-inset ring-violet-500/20">
                  <Icon className="h-[18px] w-[18px] text-violet-300" aria-hidden="true" />
                </span>
                <h3 className="text-[17px] font-semibold leading-snug">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-content-mid">{s.desc}</p>
              </motion.li>
            );
          })}
        </ul>

        <div className="mt-12">
          <PrimaryAction
            href={whatsappLink('Oi! Vim pelo site e quero contar o que a minha empresa precisa.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Contar o que eu preciso
          </PrimaryAction>
        </div>
      </div>
    </section>
  );
}
