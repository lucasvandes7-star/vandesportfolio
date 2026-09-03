import React from 'react';
import { cn } from '../../lib/utils';

/** Divisória de 1px. Substitui card onde só é preciso separar conteúdo. */
export default function HairRule({ tone = 'dark', vertical = false, className }) {
  const color = tone === 'paper' ? 'bg-hairp' : 'bg-hair';
  return (
    <span
      aria-hidden="true"
      className={cn('block shrink-0', color, vertical ? 'w-px self-stretch' : 'h-px w-full', className)}
    />
  );
}
