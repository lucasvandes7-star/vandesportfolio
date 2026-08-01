import React from 'react';
import { ArrowRight } from 'lucide-react';

/** Glifo do WhatsApp (marca oficial simplificada). */
export function WhatsAppIcon({ className = 'h-4 w-4' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.23-8.24 8.23Z" />
    </svg>
  );
}

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
