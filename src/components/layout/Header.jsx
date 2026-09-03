import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu } from 'lucide-react';
import { NAV } from '../../data/site';
import { whatsappLink } from '../../data/contact';
import Logo from '../ui/Logo';
import MobileMenu from './MobileMenu';

/**
 * O header atravessa duas zonas de tema. Em vez de espalhar condicionais de
 * className, alterna data-over="paper|dark" e o CSS resolve o resto.
 * Sem window.addEventListener('scroll'): useScroll usa o rAF do Framer Motion.
 */
export default function Header() {
  const [over, setOver] = useState('paper');
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setOver(y > window.innerHeight * 0.72 ? 'dark' : 'paper');
  });

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-btn focus:bg-ink-hi focus:px-5 focus:py-3 focus:text-[14px] focus:font-medium focus:text-bg"
      >
        Pular para o conteúdo
      </a>

      <header
        data-over={over}
        className="site-header fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out"
      >
        <div className="shell flex h-[72px] items-center justify-between gap-8">
          <a href="#topo" className="shrink-0" aria-label="Início">
            <Logo />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group relative text-[14.5px] opacity-70 transition-opacity duration-300 hover:opacity-100"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1.5 left-0 h-px w-0 bg-current transition-all duration-300 ease-out group-hover:w-full"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden text-[14.5px] sm:inline-block"
            >
              Vamos conversar
              <span
                aria-hidden="true"
                className="absolute -bottom-1.5 left-0 h-px w-full bg-current opacity-40 transition-opacity duration-300 group-hover:opacity-100"
              />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen}
              className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
