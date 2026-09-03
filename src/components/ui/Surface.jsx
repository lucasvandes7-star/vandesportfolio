import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Superfície de card. `interactive` adiciona o hover discreto pedido:
 * borda um pouco mais visível e o card subindo 4px.
 */
export default function Surface({
  as: Tag = 'div',
  tone = 'raised',
  interactive = false,
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn(
        'rounded-card border border-hair transition-all duration-500 ease-out',
        tone === 'raised' ? 'bg-bg-raised' : 'bg-bg-alt',
        interactive && 'hover:-translate-y-1 hover:border-hair-strong hover:bg-bg-hover',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
