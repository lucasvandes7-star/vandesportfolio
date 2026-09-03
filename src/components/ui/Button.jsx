import React from 'react';
import { cn } from '../../lib/utils';

/**
 * Botão editorial: radius 8px, borda fina, sem preenchimento colorido.
 * O contraste vem da inversão claro/escuro, não de cor.
 *
 * tone define sobre qual fundo o botão está: 'dark' (padrão) ou 'paper' (hero).
 */

const BASE =
  'group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-btn ' +
  'font-medium transition-all duration-300 ease-out active:translate-y-px';

const SIZES = {
  md: 'h-11 px-5 text-[14.5px]',
  lg: 'h-[52px] px-7 text-[15px]',
};

const VARIANTS = {
  dark: {
    // Inversão: fundo claro, texto escuro. Contraste máximo sem cor.
    solid: 'bg-ink-hi text-bg hover:bg-white',
    outline: 'border border-hair-strong text-ink-hi hover:border-ink-low hover:bg-bg-raised',
    ghost: 'text-ink-mid hover:text-ink-hi',
  },
  paper: {
    solid: 'bg-onpaper-hi text-paper hover:bg-black',
    outline: 'border border-hairp-strong text-onpaper-hi hover:border-onpaper-hi hover:bg-paper-soft',
    ghost: 'text-onpaper-mid hover:text-onpaper-hi',
  },
};

export default function Button({
  as: Tag = 'a',
  variant = 'solid',
  tone = 'dark',
  size = 'md',
  icon: Icon,
  className,
  children,
  ...props
}) {
  return (
    <Tag className={cn(BASE, SIZES[size], VARIANTS[tone][variant], className)} {...props}>
      {children}
      {Icon && (
        <Icon
          className="h-[15px] w-[15px] shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </Tag>
  );
}
