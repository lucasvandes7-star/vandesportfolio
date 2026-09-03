import React from 'react';
import Section from '../layout/Section';
import SectionIntro from '../ui/SectionIntro';
import Reveal from '../ui/Reveal';
import { stackData } from '../../data/stack';
import { containerTight, fadeUp } from '../../lib/motion';

/** Agrupado por área, sem barra de porcentagem. */
export default function Stack() {
  return (
    <Section id="stack">
      <SectionIntro title="Ferramentas que eu uso todo dia" />

      <Reveal variants={containerTight} className="mt-14 flex flex-col">
        {stackData.map((group) => (
          <Reveal
            key={group.group}
            variants={fadeUp}
            className="grid grid-cols-1 gap-y-4 border-t border-hair py-8 last:border-b lg:grid-cols-12 lg:gap-x-8 lg:py-10"
          >
            <h3 className="label pt-1 text-ink-low lg:col-span-3">{group.group}</h3>
            <ul className="flex flex-wrap gap-x-8 gap-y-3 lg:col-span-9">
              {group.items.map((item) => (
                <li key={item} className="text-[clamp(1rem,1.6vw,1.2rem)] font-light text-ink-hi">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </Reveal>
    </Section>
  );
}
