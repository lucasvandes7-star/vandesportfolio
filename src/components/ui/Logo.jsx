import React from 'react';
import { cn } from '../../lib/utils';

/** Wordmark em texto. Herda a cor da zona (hero clara ou fundo escuro). */
export default function Logo({ className }) {
  return (
    <span className={cn('text-[17px] font-medium tracking-tight', className)}>
      Lucas <span className="opacity-70">Vandes</span>
    </span>
  );
}
