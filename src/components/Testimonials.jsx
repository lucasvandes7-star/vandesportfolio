import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Dra. Patricia Medeiros',
      role: 'Diretora Clínica · Sorriso Fiel',
      text: 'O novo site transformou nossa captação de pacientes. O agendamento via WhatsApp integrado triplicou nossos contatos na primeira semana.',
      stars: 5,
    },
    {
      name: 'Gabriel Castilhos',
      role: 'Sócio Fundador · Castilhos Advocacia',
      text: 'A autoridade visual que o site nos trouxe foi imediata. Clientes corporativos comentam com frequência sobre o profissionalismo do nosso portal.',
      stars: 5,
    },
    {
      name: 'Renata Vasconcelos',
      role: 'Head de Operações · Aurora Viagens',
      text: 'O web app ficou extremamente rápido e responsivo. Nossos clientes adoram a experiência visual de escolher os destinos. Nota 10 em design.',
      stars: 5,
    }
  ];

  return (
    <section id="depoimentos" className="py-32 bg-[#0d0d0d] text-[#EAE3D2] relative border-y border-[#EAE3D2]/15">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-[#EAE3D2]/15 pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#EAE3D2]/60">PROVA SOCIAL</span>
            <h2 className="font-bebas text-5xl sm:text-7xl uppercase tracking-tight text-[#EAE3D2] mt-2 text-stroke-hover cursor-pointer">
              AVALIAÇÃO DOS CLIENTES.
            </h2>
          </div>
          <p className="text-sm text-[#EAE3D2]/70 max-w-md font-sans">
            Resultados mensuráveis e satisfação comprovada por empresários que confiaram no nosso trabalho.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="cream-card p-8 rounded-3xl relative flex flex-col justify-between"
            >
              <Quote className="w-10 h-10 text-[#EAE3D2]/20 absolute top-6 right-6" />

              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#EAE3D2] text-[#EAE3D2]" />
                  ))}
                </div>
                <p className="text-[#EAE3D2]/80 text-xs sm:text-sm font-sans leading-relaxed mb-8 italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#EAE3D2]/15">
                <h4 className="font-bebas text-2xl tracking-wide text-[#EAE3D2]">{rev.name}</h4>
                <p className="text-xs font-mono text-[#EAE3D2]/60 uppercase tracking-wider mt-0.5">{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
