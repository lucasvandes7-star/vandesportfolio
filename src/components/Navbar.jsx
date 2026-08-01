import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from './ui/Logo';
import { useBudgetModal } from '../context/BudgetModalContext';
import useFocusTrap from '../lib/useFocusTrap';

const links = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Processo', href: '#processo' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openModal } = useBudgetModal();
  const menuRef = useRef(null);

  useFocusTrap(menuRef, open);

  // Trava o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Fecha o menu com Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-pill focus:bg-violet-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-pill border border-[var(--line-soft)] bg-[#0d0d13]/80 py-2.5 pl-6 pr-2.5 backdrop-blur-xl"
        >
          <a
            href="#hero"
            aria-label="Vandrix — início"
            className="shrink-0 text-content-hi transition-transform duration-400 ease-spring hover:scale-[1.02]"
          >
            <Logo width={118} />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-pill px-4 py-2 text-[14.5px] text-content-mid transition-colors duration-300 hover:bg-white/[0.06] hover:text-content-hi"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            {/* Visível em todos os tamanhos: contato é sempre um clique */}
            <button
              type="button"
              onClick={openModal}
              aria-label="Fazer orçamento"
              className="group inline-flex items-center gap-2 rounded-pill bg-violet-600 text-[14.5px] font-medium text-white transition-colors duration-300 hover:bg-violet-500 max-sm:h-11 max-sm:w-11 max-sm:justify-center sm:py-2 sm:pl-5 sm:pr-2"
            >
              <span className="max-sm:sr-only">Fazer orçamento</span>
              <span className="flex items-center justify-center rounded-pill sm:h-7 sm:w-7 sm:bg-white/15">
                <MessageCircle className="h-[18px] w-[18px] sm:h-3.5 sm:w-3.5" aria-hidden="true" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu de navegação'}
              aria-expanded={open}
              aria-controls="menu-mobile"
              className="flex h-11 w-11 items-center justify-center rounded-pill border border-[var(--line-soft)] bg-white/[0.03] text-content-hi transition-colors duration-300 hover:bg-white/[0.07] lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile */}
      {open && (
        <div
          id="menu-mobile"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className="fixed inset-0 z-40 bg-[#050507]/95 px-6 pb-10 pt-28 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-[var(--line-soft)] py-5 font-display text-2xl text-content-hi"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => { setOpen(false); openModal(); }}
            className="mt-8 w-full rounded-pill bg-violet-600 py-4 text-[15px] font-medium text-white"
          >
            Fazer orçamento
          </button>
        </div>
      )}
    </>
  );
}
