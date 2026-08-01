# Design

<!-- impeccable:design-schema 1 -->

## Visual World

Escuro, técnico e direto — a convenção de landing page de produto executada com acabamento alto, em **roxo elétrico sobre preto**. O usuário escolheu explicitamente a linguagem da categoria (referência: site institucional Vandrix), então a execução é a convenção em fidelidade total: navbar em pill flutuante, hero com título grande e palavra em destaque, badges de seção, cards de canto muito arredondado, botões pill.

O roxo não é neon decorativo espalhado: ele carrega ação (CTA primário), destaque de palavra no título e estados. O preto é o campo.

## Color

Estratégia: **Restrained com acento forte** — preto e cinzas carregam a superfície; o roxo aparece onde há ação ou ênfase.

```
--ink-900: #050507   /* fundo base */
--ink-850: #08080C   /* fundo alternado de seção */
--ink-800: #0D0D13   /* superfície de card */
--ink-700: #14141C   /* superfície elevada */

--line-soft: rgba(255,255,255,0.07)   /* borda padrão */
--line-mid:  rgba(255,255,255,0.12)   /* borda em hover */

--text-hi:  #F4F6FA   /* títulos */
--text-mid: #A8B0BF   /* corpo */
--text-low: #7D8595   /* meta, legendas */

--violet-600: #7C3AED  /* CTA primário */
--violet-500: #8B5CF6  /* hover, links */
--violet-400: #A855F7  /* destaque em título */
--violet-300: #C4B5FD  /* texto sobre roxo escuro, ícones */
--violet-glow: rgba(124,58,237,0.16)  /* halo de fundo, usado com moderação */
```

Contraste medido no build (AA em tudo): corpo 9.34:1, títulos 18.82:1, meta 5.49:1,
`--violet-400` 5.15:1, branco sobre `--violet-600` 5.70:1.

## Typography

- **Display:** Outfit (600/700). Títulos com `letter-spacing: -0.03em`, `line-height: 1.02–1.08`.
- **Corpo:** Instrument Sans (400/500). `line-height: 1.6–1.65`, medida 62–65ch.
- **Rótulo técnico:** Geist 500, `text-transform: uppercase`, `letter-spacing: 0.12em`, tamanho 11–12px. Usado apenas no badge de seção — é um kicker nomeado, não um eyebrow em toda seção.

Escala display: hero 60–76px, h2 40–46px, h3 18–20px.

## Components

- **Navbar:** pill flutuante fixa no topo, fundo `--ink-800` com blur, borda `--line-soft`, logo wordmark à esquerda, CTA roxo à direita.
- **Badge de seção:** pill pequena, fundo `rgba(255,255,255,0.03)`, borda `--line-soft`, ícone + label em caps.
- **Card:** `--ink-800`, borda `--line-soft`, `border-radius: 20px`, padding 28–32px. Hover eleva borda para `--line-mid`. Sem card dentro de card.
- **Botão primário:** pill roxo `--violet-600`, texto branco, ícone em círculo à direita.
- **Botão secundário:** pill transparente, borda `--line-soft`.

## Motion

Um momento autoral: entrada por seção com `opacity` + `translateY(20px)`, ease-out exponencial, `viewport once`. Conteúdo visível por padrão (sem depender de JS para ser legível). Respeitar `prefers-reduced-motion`.

## Logo

Wordmark **vandrix.site** em texto (Outfit 600), definido em `src/components/ui/Logo.jsx`.
Renderizado em branco na navbar e no rodapé. Trocar a marca em um único lugar altera o site inteiro.

## Prohibitions

- Sem texto em gradiente — ênfase vem de peso, tamanho ou cor sólida.
- Sem `border-left` colorido acima de 1px.
- Sem números de seção (01/02/03) — a sequência não carrega informação aqui.
- Sem métrica inventada no hero (não há dados reais de resultado).
- Glass/blur apenas na navbar, onde a sobreposição justifica.
