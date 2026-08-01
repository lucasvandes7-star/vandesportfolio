import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import Logo from './ui/Logo';
import { whatsappLink, EMAIL, WHATSAPP_DISPLAY } from '../data/contact';
import { WhatsAppIcon } from './ui/primitives';

const nav = [
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Processo', href: '#processo' },
  { label: 'FAQ', href: '#faq' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line-soft)] bg-ink-850">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Marca */}
          <div>
            <Logo />
            <p className="mt-5 max-w-[42ch] text-[15px] leading-[1.65] text-content-mid">
              Sites, CRMs e automações sob medida para pequenas e médias empresas. Feitos por
              quem você fala direto.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Rodapé">
            <h2 className="kicker">Navegação</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[15px] text-content-mid transition-colors duration-300 hover:text-content-hi"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h2 className="kicker">Contato</h2>
            <ul className="mt-5 flex flex-col gap-3.5">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[15px] text-content-mid transition-colors duration-300 hover:text-content-hi"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-content-low" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2.5 text-[15px] text-content-mid transition-colors duration-300 hover:text-content-hi"
                >
                  <Mail className="h-4 w-4 shrink-0 text-content-low" aria-hidden="true" />
                  {EMAIL}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-[15px] text-content-mid">
                <MapPin className="h-4 w-4 shrink-0 text-content-low" aria-hidden="true" />
                Atendimento remoto — Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-[var(--line-soft)] pt-7 sm:flex-row sm:items-center">
          <p className="text-[13.5px] text-content-low">
            © {year} vandrix.site — Lucas Vandes. Todos os direitos reservados.
          </p>
          <p className="text-[13.5px] text-content-low">vandesportfolio.com.br</p>
        </div>
      </div>
    </footer>
  );
}
