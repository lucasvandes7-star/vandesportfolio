import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import { processData } from '../../data/process';

/**
 * Lista vertical com o número na margem, não a timeline horizontal de cinco
 * colunas iguais. A régua à esquerda é desenhada conforme o scroll, porque
 * aqui o movimento comunica a própria progressão do processo.
 */
export default function Process() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <Section id="processo" className="bg-bg-alt">
      <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-12 lg:gap-x-8">
        <Reveal as="h2" className="text-section text-balance lg:col-span-5">
          Da conversa ao site no ar em duas a quatro semanas
        </Reveal>
        <Reveal as="p" className="max-w-[40ch] self-end text-[15px] leading-[1.7] text-ink-mid lg:col-span-4 lg:col-start-9">
          Você aprova cada etapa antes da seguinte começar e sabe em que ponto o
          trabalho está.
        </Reveal>
      </div>

      <div ref={ref} className="relative mt-16 lg:mt-24 lg:pl-[12%]">
        <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px bg-hair lg:left-[12%]">
          <motion.div
            style={reduce ? undefined : { scaleY }}
            className="h-full w-full origin-top bg-ink-low"
          />
        </div>

        <ol>
          {processData.map((step) => (
            <Reveal
              as="li"
              key={step.number}
              className="grid grid-cols-1 gap-y-3 border-b border-hair py-8 pl-8 last:border-b-0 sm:grid-cols-12 sm:gap-x-8 sm:py-10"
            >
              <span className="label text-ink-low sm:col-span-1">{step.number}</span>
              <h3 className="text-sub text-ink-hi sm:col-span-3">{step.title}</h3>
              <p className="max-w-[44ch] text-[15px] leading-[1.7] text-ink-mid sm:col-span-6">
                {step.desc}
              </p>
              <span className="label text-ink-low sm:col-span-2 sm:text-right">{step.time}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
