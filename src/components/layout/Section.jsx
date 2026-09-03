import React from 'react';
import { cn } from '../../lib/utils';

/** Casca de seção: id de âncora, container editorial e ritmo vertical padrão. */
export default function Section({ id, as: Tag = 'section', className, containerClassName, children, ...props }) {
  return (
    <Tag id={id} className={cn('py-[clamp(64px,8vw,124px)]', className)} {...props}>
      <div className={cn('shell', containerClassName)}>{children}</div>
    </Tag>
  );
}
