import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, Target, Layers, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      num: '01',
      icon: Gauge,
      title: "PERFORMANCE EXTREMA",
      description: "Carregamento instantâneo (< 1 segundo). Sites otimizados nos critérios mais rigorosos de SEO e Core Web Vitals do Google.",
    },
    {
      num: '02',
      icon: Target,
      title: "COPY & ARQUITETURA COMERCIAL",
      description: "Nós não apenas criamos layout; estruturamos a jornada completa de decisão para transformar visitantes em clientes reais.",
    },
    {
      num: '03',
      icon: Layers,
      title: "CRMS SOB MEDIDA",
      description: "Painéis de gestão feitos sob medida para a operação da sua empresa. Chega de pagar licenças caras por sistemas genéricos.",
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: "DESIGN EDITORIAL PREMIUM",
      description: "Linguagem visual inspirada nas melhores startups do Silicon Valley para garantir credibilidade e autoridade imediata.",
    }
  ];

  return (
    <section className="py-32 bg-[#0d0d0d] text-[#EAE3D2] relative border-y border-[#EAE3D2]/15">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-[#EAE3D2]/15 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#EAE3D2]/60">DIFERENCIAIS</span>
            <h2 className="font-bebas text-5xl sm:text-7xl uppercase tracking-tight text-[#EAE3D2] mt-2 text-stroke-hover cursor-pointer">
              ENGENHARIA DIGITAL FOCADA EM RESULTADO.
            </h2>
          </div>
          <p className="text-sm text-[#EAE3D2]/70 max-w-md font-sans">
            Combinamos estética minimalista internacional com arquitetura robusta de software para acelerar sua empresa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cream-card p-8 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-bold text-[#EAE3D2]/40 group-hover:text-[#EAE3D2] transition-colors">{item.num}</span>
                    <div className="w-10 h-10 rounded-full border border-[#EAE3D2]/20 flex items-center justify-center text-[#EAE3D2] group-hover:border-[#EAE3D2] group-hover:bg-[#EAE3D2] group-hover:text-[#121212] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h3 className="font-bebas text-2xl tracking-wide text-[#EAE3D2] mb-3 group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h3>
                  
                  <p className="text-[#EAE3D2]/70 text-xs leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
