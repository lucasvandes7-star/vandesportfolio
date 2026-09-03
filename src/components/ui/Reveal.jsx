import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, VIEWPORT } from '../../lib/motion';

/**
 * Entrada por scroll. Sob prefers-reduced-motion o conteúdo renderiza
 * estático — nunca preso em opacity:0, que é o modo de falha do whileInView.
 */
export default function Reveal({
  as = 'div',
  variants = fadeUp,
  delay = 0,
  className,
  children,
  ...props
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] ?? motion.div;

  if (reduce) {
    const Static = as;
    return (
      <Static className={className} {...props}>
        {children}
      </Static>
    );
  }

  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      variants={variants}
      transition={delay ? { delay } : undefined}
      className={className}
      {...props}
    >
      {children}
    </Tag>
  );
}
