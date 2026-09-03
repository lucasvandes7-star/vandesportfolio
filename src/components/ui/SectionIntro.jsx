import React from 'react';
import { cn } from '../../lib/utils';
import Reveal from './Reveal';

/**
 * Cabeçalho de seção. `index` e `label` são opcionais e usados de propósito
 * em poucas seções — eyebrow em todas produz aquele ritmo templatizado.
 */
export default function SectionIntro({ index, label, title, lead, className, children }) {
  return (
    <header className={cn('max-w-[46rem]', className)}>
      {label && (
        <Reveal className="mb-8 flex items-center gap-3 text-ink-low">
          {index && <span className="label">{index}</span>}
          {index && <span aria-hidden="true" className="h-px w-8 bg-hair-strong" />}
          <span className="label">{label}</span>
        </Reveal>
      )}

      <Reveal as="h2" className="text-section text-balance">
        {title}
      </Reveal>

      {lead && (
        <Reveal as="p" className="mt-7 max-w-[38rem] text-[17px] leading-[1.7] text-ink-mid">
          {lead}
        </Reveal>
      )}

      {children}
    </header>
  );
}
