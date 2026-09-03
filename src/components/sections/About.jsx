import React from 'react';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';

/**
 * Só texto, em medida estreita. A foto já apareceu na hero; repeti-la aqui
 * seria imagem por preenchimento. O peso vem de uma abertura em corpo grande
 * seguida de dois parágrafos menores.
 */
export default function About() {
  return (
    <Section id="sobre" containerClassName="shell-narrow">
      <Reveal as="p" className="label mb-10 text-ink-low">
        Sobre
      </Reveal>

      <Reveal as="h2" className="text-section text-balance">
        O cliente não desiste do seu serviço. Ele desiste de esperar.
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
        <Reveal as="p" className="text-[15.5px] leading-[1.8] text-ink-mid">
          Em empresa pequena, a venda acontece na conversa e na primeira impressão.
          Quando o site não convence ou a resposta demora, o cliente resolve em outro
          lugar, e você nunca fica sabendo que ele existiu.
        </Reveal>
        <Reveal as="p" className="text-[15.5px] leading-[1.8] text-ink-mid">
          Trabalho sozinho e direto com quem contrata: você explica o problema para quem
          vai escrever o código. Cuido da interface, da performance e do sistema que
          sustenta a operação, do desenho ao deploy.
        </Reveal>
      </div>
    </Section>
  );
}
