import React from 'react';
import { motion } from 'framer-motion';
import { Route } from 'lucide-react';
import { SectionHeader } from './ui/primitives';

const steps = [
  {
    title: 'Conversa',
    time: '1 dia',
    desc: 'Você me conta como a operação funciona hoje e onde dói. Se eu achar que não vale a pena, eu digo na primeira conversa.',
  },
  {
    title: 'Proposta',
    time: '1 a 2 dias',
    desc: 'Escopo fechado, prazo e valor por escrito. Sem pacote genérico e sem cobrança por hora que ninguém consegue prever.',
  },
  {
    title: 'Design',
    time: '3 a 5 dias',
    desc: 'Você vê o layout e o texto antes de existir código. Ajustamos ali, que é onde mudar ainda é barato.',
  },
  {
    title: 'Desenvolvimento',
    time: '1 a 3 semanas',
    desc: 'Construção com acompanhamento. Você recebe um link de teste e vê o projeto crescendo, não um silêncio de um mês.',
  },
  {
    title: 'No ar',
    time: '1 dia',
    desc: 'Publicação, domínio, SSL e teste em celular de verdade. O código e os acessos ficam com você.',
  },
];

export default function Process() {
  return (
    <section id="processo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="Como funciona"
          badgeIcon={Route}
          title={<>Da primeira conversa ao site no ar: de duas a quatro semanas.</>}
        >
          Nada de projeto que arrasta seis meses. Você aprova cada etapa antes da seguinte
          começar, e sabe exatamente em que ponto o trabalho está.
        </SectionHeader>

        <ol className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="surface flex flex-col rounded-card p-6"
            >
              {/* A ordem carrega informação: é a sequência real das etapas */}
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-7 w-7 items-center justify-center rounded-pill bg-violet-600/[0.14] text-[13px] font-semibold text-violet-300 ring-1 ring-inset ring-violet-500/20">
                  {i + 1}
                </span>
                <span className="text-[12px] text-content-low">{s.time}</span>
              </div>
              <h3 className="text-[16px] font-semibold">{s.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-[1.6] text-content-mid">{s.desc}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
