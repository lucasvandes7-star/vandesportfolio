import React from 'react';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import { metricsData } from '../../data/metrics';
import { containerTight, fadeUp } from '../../lib/motion';

/** Faixa horizontal dividida por linhas verticais, sem cards. */
export default function Metrics() {
  return (
    <Section className="border-y border-hair !py-0" containerClassName="!px-0">
      <Reveal
        as="dl"
        variants={containerTight}
        className="grid grid-cols-2 lg:grid-cols-4"
      >
        {metricsData.map((metric) => (
          <Reveal
            key={metric.label}
            variants={fadeUp}
            className="border-b border-hair px-[clamp(24px,5vw,80px)] py-12 last:border-b-0 sm:py-16 lg:border-b-0 lg:border-r lg:last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r [&:nth-child(odd)]:border-r [&:nth-child(3)]:border-b-0"
          >
            <dt className="sr-only">{metric.label}</dt>
            <dd>
              <span className="block text-metric text-ink-hi">{metric.value}</span>
              <span className="mt-4 block text-[13.5px] leading-snug text-ink-mid">{metric.label}</span>
            </dd>
          </Reveal>
        ))}
      </Reveal>
    </Section>
  );
}
