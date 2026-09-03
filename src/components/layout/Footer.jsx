import React from 'react';
import Logo from '../ui/Logo';
import { NAV, SITE } from '../../data/site';
import { EMAIL, WHATSAPP_DISPLAY, LOCATION, whatsappLink } from '../../data/contact';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hair">
      <div className="shell py-14 sm:py-16">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-12 lg:gap-x-8">
          <div className="col-span-2 lg:col-span-4">
            <Logo className="text-ink-hi" />
            <p className="mt-4 max-w-[26ch] text-[14px] leading-[1.7] text-ink-mid">
              {SITE.role}. Sites, interfaces e sistemas de gestão sob medida.
            </p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-3 lg:col-start-6">
            <h2 className="label mb-4 text-ink-low">Navegação</h2>
            <ul className="flex flex-col gap-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[14px] text-ink-mid transition-colors duration-300 hover:text-ink-hi"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3 lg:col-start-10">
            <h2 className="label mb-4 text-ink-low">Contato</h2>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all text-[14px] text-ink-mid transition-colors duration-300 hover:text-ink-hi"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-ink-mid transition-colors duration-300 hover:text-ink-hi"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="text-[14px] text-ink-low">{LOCATION}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-hair pt-7 sm:flex-row sm:items-center">
          <p className="text-[12.5px] text-ink-low">
            © {year} {SITE.name}
          </p>
          <a
            href="#topo"
            className="text-[12.5px] text-ink-low transition-colors duration-300 hover:text-ink-hi"
          >
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
