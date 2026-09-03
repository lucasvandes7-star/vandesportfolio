import React from 'react';
import { ArrowUp } from 'lucide-react';
import Logo from '../ui/Logo';
import { NAV, SITE } from '../../data/site';
import { EMAIL, WHATSAPP_DISPLAY, LOCATION, whatsappLink } from '../../data/contact';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hair bg-bg-alt">
      <div className="shell py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-8">
          {/* Identidade */}
          <div className="lg:col-span-5">
            <Logo className="text-ink-hi" />
            <p className="mt-4 max-w-[24rem] text-[14.5px] leading-[1.7] text-ink-mid">
              {SITE.name}, {SITE.role.toLowerCase()}. Sites, interfaces e sistemas de
              gestão sob medida.
            </p>
            <p className="mt-5 text-[13.5px] text-ink-low">{LOCATION}</p>
          </div>

          {/* Navegação */}
          <nav aria-label="Rodapé" className="lg:col-span-3 lg:col-start-7">
            <h2 className="label mb-5 text-ink-low">Navegação</h2>
            <ul className="flex flex-col gap-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[14.5px] text-ink-mid transition-colors duration-300 hover:text-ink-hi"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h2 className="label mb-5 text-ink-low">Contato</h2>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-[14.5px] text-ink-mid transition-colors duration-300 hover:text-ink-hi"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14.5px] text-ink-mid transition-colors duration-300 hover:text-ink-hi"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-hair pt-8 sm:flex-row sm:items-center">
          <p className="text-[13px] text-ink-low">
            © {year} {SITE.name}. Todos os direitos reservados.
          </p>
          <a
            href="#topo"
            className="group inline-flex items-center gap-2 text-[13px] text-ink-mid transition-colors duration-300 hover:text-ink-hi"
          >
            Voltar ao topo
            <ArrowUp
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
