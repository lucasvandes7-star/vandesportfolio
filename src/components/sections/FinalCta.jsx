import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { whatsappLink, EMAIL, WHATSAPP_DISPLAY } from '../../data/contact';

export default function FinalCta() {
  return (
    <Section id="contato" className="border-t border-hair">
      <div className="flex flex-col items-center text-center">
        <Reveal as="h2" className="max-w-[18ch] text-section text-balance">
          Tem uma ideia? Vamos construir.
        </Reveal>

        <Reveal as="p" className="mt-7 max-w-[36rem] text-[17px] leading-[1.7] text-ink-mid">
          Você explica a situação, eu digo o que dá para fazer, em quanto tempo e por
          quanto. Se não fizer sentido contratar agora, eu falo isso também.
        </Reveal>

        <Reveal className="mt-11 flex flex-wrap justify-center gap-3">
          <Button
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            icon={ArrowRight}
          >
            Iniciar projeto
          </Button>
          <Button href={`mailto:${EMAIL}`} variant="outline" size="lg">
            Mandar e-mail
          </Button>
        </Reveal>

        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[14px] text-ink-mid">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 transition-colors duration-300 hover:text-ink-hi"
          >
            <WhatsAppIcon />
            {WHATSAPP_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="transition-colors duration-300 hover:text-ink-hi"
          >
            {EMAIL}
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
