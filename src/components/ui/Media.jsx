import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { cn } from '../../lib/utils';

/**
 * <picture> responsivo AVIF -> WebP -> original.
 * width/height explícitos reservam espaço e evitam CLS.
 *
 * Importante: o clip-path do reveal fica no elemento INTERNO, nunca no que é
 * observado. Aplicar clip-path: inset(0 0 100%) no próprio alvo zera a área
 * renderizada, o IntersectionObserver passa a reportar isIntersecting: false
 * e o reveal nunca dispara — a animação bloquearia o próprio gatilho.
 */
export default function Media({
  sources,
  alt,
  ratio = '3/2',
  sizes = '100vw',
  priority = false,
  reveal = true,
  grayscaleIdle = false,
  className,
  imgClassName,
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const shown = !reveal || reduce || inView;

  return (
    <div
      ref={ref}
      style={{ aspectRatio: ratio }}
      className={cn('relative overflow-hidden rounded-media bg-bg-alt', className)}
    >
      <motion.div
        initial={false}
        animate={{
          opacity: shown ? 1 : 0,
          clipPath: shown ? 'inset(0% 0 0% 0)' : 'inset(0% 0 100% 0)',
        }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full"
      >
        <picture>
          <source type="image/avif" srcSet={sources.avif} sizes={sizes} />
          <source type="image/webp" srcSet={sources.webp} sizes={sizes} />
          <img
            src={sources.fallback}
            alt={alt}
            width={sources.width}
            height={sources.height}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : undefined}
            className={cn(
              'h-full w-full object-cover transition-all duration-700 ease-out',
              grayscaleIdle && 'grayscale group-hover:scale-[1.03] group-hover:grayscale-0',
              imgClassName
            )}
          />
        </picture>
      </motion.div>
    </div>
  );
}
