import React from 'react';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import { stackData } from '../../data/stack';

/**
 * As tecnologias em corpo grande, como uma lista tipográfica contínua. Sem
 * pills e sem barra de nível: o que importa é o repertório, não uma métrica
 * inventada de domínio.
 */
export default function Stack() {
  return (
    <Section id="stack">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8">
        <Reveal className="lg:col-span-3">
          <h2 className="text-sub text-ink-hi">Ferramentas que eu uso todo dia</h2>
        </Reveal>

        <div className="lg:col-span-8 lg:col-start-5">
          {stackData.map((group) => (
            <Reveal
              key={group.group}
              className="border-t border-hair py-7 last:border-b sm:py-8"
            >
              <h3 className="label mb-4 text-ink-low">{group.group}</h3>
              <p className="font-display text-[clamp(1.15rem,2.2vw,1.6rem)] leading-[1.45] tracking-[-0.02em] text-ink-hi">
                {group.items.join('  ·  ')}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
