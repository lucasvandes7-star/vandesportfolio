import React from 'react';
import { motion } from 'framer-motion';
import { Target, Clock, FileSpreadsheet, Smartphone, Search } from 'lucide-react';
import { SectionHeader } from './ui/primitives';

const problems = [
  {
    icon: Clock,
    title: 'O orçamento que esfriou esperando',
    desc: 'O cliente pediu proposta na terça e você respondeu na quinta. Ele já fechou com outro — e você nem soube que perdeu.',
  },
  {
    icon: FileSpreadsheet,
    title: 'A planilha que só uma pessoa entende',
    desc: 'Cliente, follow-up e valor espalhados entre planilha, caderno e WhatsApp. Quando essa pessoa sai de férias, a operação para.',
  },
  {
    icon: Smartphone,
    title: 'O site que quebra no celular',
    desc: 'A maioria das visitas vem do telefone. Se o menu não abre e o botão não clica, o visitante desiste antes de ler o que você faz.',
  },
  {
    icon: Search,
    title: 'O site que ninguém acha',
    desc: 'Site pesado e sem estrutura não sobe no Google. Você existe, mas quem procura pelo seu serviço encontra o concorrente.',
  },
];

export default function Benefits() {
  return (
    <section id="problema" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          badge="O problema"
          badgeIcon={Target}
          title={<>O cliente não desiste do seu serviço. Ele desiste de esperar.</>}
        >
          Em empresa pequena, a venda acontece na conversa e na primeira impressão. Quando o site
          não convence ou a resposta demora, o cliente resolve em outro lugar — e você nunca fica
          sabendo que ele existiu.
        </SectionHeader>

        <ul className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="surface rounded-card p-7 sm:p-8"
              >
                <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-[13px] bg-violet-600/[0.12] ring-1 ring-inset ring-violet-500/20">
                  <Icon className="h-[18px] w-[18px] text-violet-300" aria-hidden="true" />
                </span>
                <h3 className="text-[17px] font-semibold leading-snug">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-content-mid">{p.desc}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
