import React from 'react';
import { ArrowRight } from 'lucide-react';

/** Badge de seção: pill com ícone + rótulo em caps. */
export function SectionBadge({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-pill border border-[var(--line-soft)] bg-white/[0.03] px-3.5 py-1.5">
      {Icon && <Icon className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />}
      <span className="kicker">{children}</span>
    </span>
  );
}

/** Botão/link primário: pill roxo com seta em círculo. */
export function PrimaryAction({ as = 'a', children, className = '', ...props }) {
  const Tag = as;
  return (
    <Tag
      className={`group inline-flex items-center gap-2.5 rounded-pill bg-violet-600 py-2 pl-6 pr-2 text-[15px] font-medium text-white transition-all duration-400 ease-spring hover:bg-violet-500 ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-pill bg-white/15 transition-transform duration-400 ease-spring group-hover:translate-x-0.5">
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Tag>
  );
}

/** Botão/link secundário: pill de contorno. */
export function SecondaryAction({ as = 'a', children, className = '', ...props }) {
  const Tag = as;
  return (
    <Tag
      className={`group inline-flex items-center gap-2.5 rounded-pill border border-[var(--line-soft)] bg-white/[0.03] py-2 pl-6 pr-2 text-[15px] font-medium text-content-hi transition-all duration-400 ease-spring hover:border-[var(--line-mid)] hover:bg-white/[0.06] ${className}`}
      {...props}
    >
      <span>{children}</span>
      <span className="flex h-8 w-8 items-center justify-center rounded-pill bg-white/[0.07] transition-transform duration-400 ease-spring group-hover:translate-x-0.5">
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </Tag>
  );
}

/** Cabeçalho de seção: badge, título e descrição. */
export function SectionHeader({ badge, badgeIcon, title, children, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}>
      {badge && <SectionBadge icon={badgeIcon}>{badge}</SectionBadge>}
      <h2 className="mt-6 text-[clamp(2rem,4.2vw,2.875rem)] leading-[1.08]">{title}</h2>
      {children && (
        <p className={`mt-5 text-[17px] leading-[1.65] text-content-mid ${align === 'center' ? 'mx-auto' : ''} max-w-[65ch]`}>
          {children}
        </p>
      )}
    </div>
  );
}
