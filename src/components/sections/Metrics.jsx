import React from 'react';
import Reveal from '../ui/Reveal';
import { metricsData } from '../../data/metrics';

/**
 * Faixa fina, sem padding de seção: serve de respiro entre dois blocos densos.
 * A primeira célula é mais larga que as outras, para a régua não ficar
 * perfeitamente dividida em quatro.
 */
const WIDTHS = ['lg:col-span-4', 'lg:col-span-3', 'lg:col-span-3', 'lg:col-span-2'];

export default function Metrics() {
  return (
    <section className="border-y border-hair py-14 sm:py-16">
      <div className="shell">
        <Reveal as="dl" className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-12">
          {metricsData.map((metric, i) => (
            <div key={metric.label} className={WIDTHS[i]}>
              <dt className="sr-only">{metric.label}</dt>
              <dd>
                <span className="block font-display text-metric text-ink-hi">{metric.value}</span>
                <span className="mt-3 block max-w-[16ch] text-[13.5px] leading-snug text-ink-mid">
                  {metric.label}
                </span>
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
