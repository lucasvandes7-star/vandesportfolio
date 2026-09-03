import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Section from '../layout/Section';
import SectionIntro from '../ui/SectionIntro';
import Reveal from '../ui/Reveal';
import { processData } from '../../data/process';
import { fadeUp } from '../../lib/motion';

/**
 * Linha conectora desenhada conforme o scroll: comunica progressão, que é o
 * assunto da seção. No mobile a linha é vertical.
 */
export default function Process() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'center 55%'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Sob reduced-motion a linha já nasce completa, nunca em scale 0.
  const lineStyle = reduce ? undefined : { scaleX: scale };
  const lineStyleMobile = reduce ? undefined : { scaleY: scale };

  return (
    <Section id="processo" className="bg-bg-alt">
      <SectionIntro
        index="04"
        label="Processo"
        title="Da primeira conversa ao site no ar em duas a quatro semanas."
        lead="Você aprova cada etapa antes da seguinte começar e sabe exatamente em que ponto o trabalho está."
      />

      <div ref={ref} className="relative mt-16">
        {/* Trilho horizontal (desktop) */}
        <div aria-hidden="true" className="absolute inset-x-0 top-[7px] hidden h-px bg-hair lg:block">
          <motion.div style={lineStyle} className="h-full origin-left bg-ink-low" />
        </div>
        {/* Trilho vertical (mobile) */}
        <div aria-hidden="true" className="absolute bottom-0 left-[7px] top-0 w-px bg-hair lg:hidden">
          <motion.div style={lineStyleMobile} className="h-full w-full origin-top bg-ink-low" />
        </div>

        <ol className="grid grid-cols-1 gap-y-10 lg:grid-cols-5 lg:gap-x-8">
          {processData.map((step) => (
            <Reveal
              as="li"
              key={step.number}
              variants={fadeUp}
              className="relative pl-9 lg:pl-0 lg:pt-9"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-[3px] h-[9px] w-[9px] rounded-full bg-ink-hi lg:left-0 lg:top-[3px]"
              />
              <div className="flex items-baseline gap-3">
                <span className="label text-ink-low">{step.number}</span>
                <span className="label text-ink-low">{step.time}</span>
              </div>
              <h3 className="mt-3 text-[19px] font-normal text-ink-hi">{step.title}</h3>
              <p className="mt-2.5 max-w-[22rem] text-[14.5px] leading-[1.65] text-ink-mid">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
