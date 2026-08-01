import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, BarChart3, ArrowRight, CheckCircle2, Monitor } from 'lucide-react';
import { useBudgetModal } from '../context/BudgetModalContext';

export default function Services() {
  const { openModal } = useBudgetModal();
  const services = [
    {
      id: 'web',
      icon: Layout,
      num: '01',
      tag: 'CRIAÇÃO DE SITES',
      title: 'WEBSITES & LANDING PAGES DE ALTA CONVERSÃO',
      desc: 'Desenvolvimento de sites ultra-performáticos, pensados em cada pixel para transmitir autoridade máxima e capturar leads qualificados.',
      bullets: ['Design exclusivo (zero templates)', 'Mobile-First & Responsivo', 'Animações fluidas em 60fps', 'SEO & Core Web Vitals 100'],
      size: 'col-span-1 lg:col-span-2'
    },
    {
      id: 'crm',
      icon: Database,
      num: '02',
      tag: 'GESTÃO COMERCIAL',
      title: 'CRMS PERSONALIZADOS & FUNIS KANBAN',
      desc: 'Sistemas completos sob medida para o seu pipeline de vendas. Controle oportunidades, contatos e obrigações operacionais.',
      bullets: ['Pipeline Kanban visual', 'Gestão de leads e contatos', 'Fluxo de caixa & relatórios', 'Zero mensalidade por usuário'],
      size: 'col-span-1 lg:col-span-1'
    },
    {
      id: 'dashboards',
      icon: BarChart3,
      num: '03',
      tag: 'BUSINESS INTELLIGENCE',
      title: 'DASHBOARDS ANALÍTICOS EM TEMPO REAL',
      desc: 'Visualização clara e precisa do desempenho financeiro, ticket médio e metas da sua empresa com gráficos interativos.',
      bullets: ['KPIs financeiros e margens', 'Gráficos dinâmicos', 'Filtros por período', 'Acesso rápido via desktop e mobile'],
      size: 'col-span-1 lg:col-span-1'
    },
    {
      id: 'apps',
      icon: Monitor,
      num: '04',
      tag: 'APLICAÇÕES WEB',
      title: 'ECOSSISTEMAS DIGITAIS SOB MEDIDA',
      desc: 'Portais completos e aplicações web interativas para transformar o posicionamento e a operação da sua marca.',
      bullets: ['Arquitetura escalável', 'Integração de APIS e WhatsApp', 'Segurança & Alta disponibilidade', 'Performance instantânea'],
      size: 'col-span-1 lg:col-span-2'
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-[#121212] text-[#EAE3D2] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-[#EAE3D2]/15 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#EAE3D2]/60">NOSSAS SOLUÇÕES</span>
            <h2 className="font-bebas text-5xl sm:text-7xl uppercase tracking-tight text-[#EAE3D2] mt-2 text-stroke-hover cursor-pointer">
              EXCELÊNCIA EM CADA PROJETO.
            </h2>
          </div>
          <p className="text-sm text-[#EAE3D2]/70 max-w-md font-sans">
            Soluções completas de engenharia web e software para digitalizar a sua empresa.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((serv, i) => {
            const Icon = serv.icon;
            return (
              <motion.div
                key={serv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${serv.size} cream-card p-8 sm:p-10 rounded-3xl flex flex-col justify-between group relative overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full border border-[#EAE3D2]/20 text-[#EAE3D2]/80">
                      {serv.tag}
                    </span>
                    <span className="font-mono text-2xl font-bold text-[#EAE3D2]/30">{serv.num}</span>
                  </div>

                  <h3 className="font-bebas text-3xl sm:text-4xl tracking-wide text-[#EAE3D2] mb-4 leading-none group-hover:text-outline-cream transition-all">
                    {serv.title}
                  </h3>

                  <p className="text-[#EAE3D2]/70 text-xs sm:text-sm font-sans leading-relaxed mb-8">
                    {serv.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {serv.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs text-[#EAE3D2]/80 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#EAE3D2] shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-[#EAE3D2]/15 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={openModal}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#EAE3D2] hover:opacity-70 transition-opacity"
                  >
                    <span>Solicitar Proposta</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
