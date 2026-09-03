import React from 'react';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import { whatsappLink, EMAIL, WHATSAPP_DISPLAY } from '../../data/contact';

/**
 * Contato assimétrico, não o bloco centralizado de fim de landing page.
 * Sem botão: os próprios canais, em corpo grande, são a ação. Duas linhas
 * clicáveis pesam mais que dois retângulos com seta.
 */
export default function FinalCta() {
  return (
    <Section id="contato" className="border-t border-hair">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-8">
        <Reveal className="lg:col-span-5">
          <h2 className="text-section text-balance">
            Me conta o que a sua empresa precisa.
          </h2>
          <p className="mt-7 max-w-[36ch] text-[16px] leading-[1.75] text-ink-mid">
            Você explica a situação, eu digo o que dá para fazer, em quanto tempo e por
            quanto. Se não fizer sentido contratar agora, eu falo isso também.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7">
          <dl>
            <div className="border-t border-hair py-7">
              <dt className="label mb-3 text-ink-low">WhatsApp</dt>
              <dd>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sub text-ink-hi underline decoration-hair-strong decoration-1 underline-offset-[6px] transition-colors duration-300 hover:decoration-ink-hi"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </dd>
            </div>
            <div className="border-y border-hair py-7">
              <dt className="label mb-3 text-ink-low">E-mail</dt>
              <dd>
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all text-sub text-ink-hi underline decoration-hair-strong decoration-1 underline-offset-[6px] transition-colors duration-300 hover:decoration-ink-hi"
                >
                  {EMAIL}
                </a>
              </dd>
            </div>
          </dl>
          <p className="mt-7 text-[14px] leading-[1.7] text-ink-low">
            Respondo no mesmo dia útil. Se preferir, mande já o que você tem em mente e
            eu volto com o caminho.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
