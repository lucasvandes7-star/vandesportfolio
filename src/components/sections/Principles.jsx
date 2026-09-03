import React from 'react';
import Section from '../layout/Section';
import SectionIntro from '../ui/SectionIntro';
import Reveal from '../ui/Reveal';
import { principlesData } from '../../data/principles';
import { containerTight, fadeUp } from '../../lib/motion';

/**
 * Diferenciais no lugar de depoimentos: não há depoimento real coletado e
 * inventar nome de cliente seria falso. Cada linha nomeia um problema comum
 * e a resposta que dou a ele.
 */
export default function Principles() {
  return (
    <Section className="bg-bg-alt">
      <SectionIntro title="O que costuma estar quebrado, e o que eu faço com isso" />

      <Reveal variants={containerTight} className="mt-14 flex flex-col">
        {principlesData.map((item) => (
          <Reveal
            key={item.number}
            variants={fadeUp}
            className="grid grid-cols-1 gap-y-4 border-t border-hair py-9 last:border-b lg:grid-cols-12 lg:gap-x-8 lg:py-11"
          >
            <span className="label pt-2 text-ink-low lg:col-span-1">{item.number}</span>
            <h3 className="text-[clamp(1.3rem,2.2vw,1.75rem)] font-light leading-tight text-ink-hi lg:col-span-5">
              {item.problem}
            </h3>
            <p className="text-[15px] leading-[1.75] text-ink-mid lg:col-span-6">{item.answer}</p>
          </Reveal>
        ))}
      </Reveal>
    </Section>
  );
}
