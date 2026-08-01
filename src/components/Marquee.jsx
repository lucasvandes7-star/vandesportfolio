import React from 'react';

const items = [
  'Meu site parece amador perto do concorrente',
  'Controlo meus clientes numa planilha que só eu entendo',
  'Perco orçamento porque demoro pra responder',
  'Pago mensalidade por usuário num sistema que uso pela metade',
  'Meu site não abre direito no celular',
  'Não sei quantos orçamentos viraram venda',
  'Faço o mesmo relatório na mão toda semana',
  'Meu site some no Google',
];

export default function Marquee() {
  return (
    <section
      aria-label="Problemas que resolvemos"
      className="border-y border-[var(--line-soft)] bg-ink-850 py-10"
    >
      <p className="mb-7 text-center kicker">O que eu mais escuto na primeira conversa</p>

      <div className="marquee-mask relative flex overflow-hidden">
        {/* Duas cópias em sequência para o loop ser contínuo */}
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 animate-marquee items-center gap-3 pr-3"
            aria-hidden={copy === 1}
          >
            {items.map((item, i) => (
              <li
                key={i}
                className="flex shrink-0 items-center gap-2.5 rounded-pill border border-[var(--line-soft)] bg-white/[0.03] px-5 py-3"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-pill bg-violet-500" aria-hidden="true" />
                <span className="whitespace-nowrap text-[14.5px] text-content-mid">{item}</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
