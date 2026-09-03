import React from 'react';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import { principlesData } from '../../data/principles';

/**
 * Par problema/resposta em duas colunas desiguais: o problema em corpo grande
 * à esquerda, a resposta em texto miúdo deslocado à direita. A tensão entre os
 * dois tamanhos é o que carrega a seção, sem card nenhum.
 */
export default function Principles() {
  return (
    <Section className="bg-bg-alt">
      <Reveal as="h2" className="max-w-[20ch] text-section text-balance">
        O que costuma estar quebrado, e o que eu faço com isso
      </Reveal>

      <div className="mt-16 lg:mt-24">
        {principlesData.map((item, i) => (
          <Reveal
            key={item.number}
            className="grid grid-cols-1 gap-y-4 border-t border-hair py-9 last:border-b lg:grid-cols-12 lg:gap-x-8 lg:py-12"
          >
            <span className="label pt-2 text-ink-low lg:col-span-1">{item.number}</span>
            <h3
              className={`font-display text-[clamp(1.3rem,2.3vw,1.9rem)] leading-[1.15] tracking-[-0.025em] text-ink-hi ${
                i % 2 === 0 ? 'lg:col-span-5' : 'lg:col-span-6'
              }`}
            >
              {item.problem}
            </h3>
            <p
              className={`max-w-[48ch] text-[15px] leading-[1.75] text-ink-mid ${
                i % 2 === 0 ? 'lg:col-span-5 lg:col-start-8' : 'lg:col-span-4 lg:col-start-9'
              }`}
            >
              {item.answer}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
