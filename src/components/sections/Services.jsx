import React from 'react';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import { servicesData } from '../../data/services';

/**
 * Sem cards e sem ícones: cada serviço é uma faixa horizontal separada por
 * hairline, com o número grande na margem esquerda. A largura das colunas
 * muda por item, para as três linhas não lerem como um grid repetido.
 */
const SPANS = [
  { title: 'lg:col-span-4', desc: 'lg:col-span-4', list: 'lg:col-span-3 lg:col-start-10' },
  { title: 'lg:col-span-5', desc: 'lg:col-span-3', list: 'lg:col-span-3 lg:col-start-10' },
  { title: 'lg:col-span-4', desc: 'lg:col-span-4', list: 'lg:col-span-3 lg:col-start-10' },
];

export default function Services() {
  return (
    <Section id="servicos" className="bg-bg-alt">
      <Reveal as="h2" className="max-w-[16ch] text-section">
        O que eu desenvolvo
      </Reveal>

      <div className="mt-16 lg:mt-20">
        {servicesData.map((service, i) => {
          const span = SPANS[i];
          return (
            <Reveal
              key={service.number}
              as="article"
              className="grid grid-cols-1 gap-y-5 border-t border-hair py-10 last:border-b lg:grid-cols-12 lg:gap-x-8 lg:py-14"
            >
              <div className="flex items-start gap-6 lg:col-span-1">
                <span className="label text-ink-low">{service.number}</span>
              </div>

              <h3 className={`text-sub text-ink-hi ${span.title}`}>{service.title}</h3>

              <p className={`max-w-[38ch] text-[15px] leading-[1.7] text-ink-mid ${span.desc}`}>
                {service.desc}
              </p>

              <ul className={`flex flex-wrap gap-x-5 gap-y-1.5 lg:flex-col lg:gap-y-2 ${span.list}`}>
                {service.items.map((item) => (
                  <li key={item} className="text-[13.5px] text-ink-low">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
