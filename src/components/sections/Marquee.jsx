import React from 'react';

/**
 * Único marquee da página. Faz a ponte entre a hero clara e a zona escura,
 * trazendo a voz do cliente antes do argumento.
 */
const ITEMS = [
  'Meu site parece amador perto do concorrente',
  'Controlo meus clientes numa planilha que só eu entendo',
  'Perco orçamento porque demoro pra responder',
  'Pago mensalidade por usuário num sistema que uso pela metade',
  'Meu site não abre direito no celular',
  'Não sei quantos orçamentos viraram venda',
  'Faço o mesmo relatório na mão toda semana',
];

export default function Marquee() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <section aria-label="Situações que apareceram em primeiras conversas" className="border-y border-hair py-7">
      <div className="marquee-mask overflow-hidden">
        <ul className="flex w-max animate-marquee items-center gap-12 [@media(prefers-reduced-motion:reduce)]:animate-none">
          {track.map((item, i) => (
            <li
              key={`${item}-${i}`}
              aria-hidden={i >= ITEMS.length ? 'true' : undefined}
              className="flex shrink-0 items-center gap-12 text-[14px] text-ink-mid"
            >
              <span>{item}</span>
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-low" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
