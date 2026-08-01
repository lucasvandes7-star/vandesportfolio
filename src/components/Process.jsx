import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Code2, Rocket } from 'lucide-react';
import { Timeline } from './ui/timeline';

export default function Process() {
  const steps = [
    {
      num: '01',
      icon: Search,
      title: 'DIAGNÓSTICO & ESTRATÉGIA',
      desc: 'Analisamos os gargalos do seu processo atual de vendas, público-alvo e posicionamento para desenhar a estrutura ideal.'
    },
    {
      num: '02',
      icon: Compass,
      title: 'DESIGN UI/UX & COPY',
      desc: 'Prototipamos interfaces com tipografia marcante, hierarquia visual impecável e textos focados em conversão imediata.'
    },
    {
      num: '03',
      icon: Code2,
      title: 'ENGENHARIA FRONTEND',
      desc: 'Desenvolvemos o sistema utilizando React, Next.js e Framer Motion para máxima fluidez e velocidade.'
    },
    {
      num: '04',
      icon: Rocket,
      title: 'DEPLOY & PERFORMANCE',
      desc: 'Publicamos o projeto com velocidade máxima, testes rigorosos de SEO e acompanhamento de métricas.'
    }
  ];

  const timelineData = steps.map((step, idx) => {
    const Icon = step.icon;
    const images = [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop", // Diagnóstico
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop", // Design UI
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop", // Engenharia
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"  // Deploy
    ];

    return {
      title: step.num,
      content: (
        <div className="cream-card p-8 rounded-3xl group mb-8 flex flex-col gap-6 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-[#EAE3D2]/30 cursor-pointer">
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full border border-[#EAE3D2]/20 flex items-center justify-center text-[#EAE3D2] bg-[#121212]/80 backdrop-blur-sm">
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-bebas text-3xl tracking-wide text-[#EAE3D2]">{step.title}</h3>
          </div>
          <p className="text-[#EAE3D2]/80 text-sm font-sans leading-relaxed relative z-10">
            {step.desc}
          </p>
          <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden shadow-2xl mt-4 border border-[#EAE3D2]/10 z-10">
            <img
              src={images[idx]}
              alt={step.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110 brightness-[0.8]"
            />
          </div>
        </div>
      ),
    };
  });

  return (
    <section id="processo" className="py-32 bg-[#0d0d0d] text-[#EAE3D2] relative border-t border-[#EAE3D2]/15">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-[#EAE3D2]/15 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#EAE3D2]/60">FLUXO TRANSPARENTE</span>
            <h2 className="font-bebas text-5xl sm:text-7xl uppercase tracking-tight text-[#EAE3D2] mt-2 text-stroke-hover cursor-pointer">
              PROCESSO EM 4 ETAPAS RIGOROSAS.
            </h2>
          </div>
          <p className="text-sm text-[#EAE3D2]/70 max-w-md font-sans">
            Um desenvolvimento sem enrolação, focado em agilidade e entregas pontuais.
          </p>
        </div>

        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
