/** @type {import('tailwindcss').Config} */

// As cores referenciam as CSS vars de src/index.css (fonte única de verdade).
// Consequência: o modificador de opacidade (bg-bg/50) não funciona nestes
// tokens. Onde precisar de alpha, use um token dedicado que já o embuta.
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          alt: "var(--bg-alt)",
          raised: "var(--bg-raised)",
          hover: "var(--surface-hover)",
        },
        paper: {
          DEFAULT: "var(--paper)",
          soft: "var(--paper-soft)",
        },
        ink: {
          hi: "var(--ink-hi)",
          mid: "var(--ink-mid)",
          low: "var(--ink-low)",
        },
        onpaper: {
          hi: "var(--onpaper-hi)",
          mid: "var(--onpaper-mid)",
          low: "var(--onpaper-low)",
        },
        hair: {
          DEFAULT: "var(--hair)",
          strong: "var(--hair-strong)",
        },
        hairp: {
          DEFAULT: "var(--hair-paper)",
          strong: "var(--hair-paper-strong)",
        },
        accent: {
          gray: "var(--accent-gray)",
          silver: "var(--accent-silver)",
        },
      },
      fontFamily: {
        // Bricolage tem larguras irregulares e opsz variável: ganha caráter em
        // corpo grande. Instrument Sans fica só no texto corrido, onde a
        // neutralidade ajuda a leitura.
        display: ['"Bricolage Grotesque"', "Georgia", "serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        // Escala com saltos reais entre display e texto, não um degradê linear.
        display: [
          "clamp(2.9rem, 6.4vw, 6.2rem)",
          { lineHeight: "0.92", letterSpacing: "-0.035em", fontWeight: "400" },
        ],
        section: [
          "clamp(1.95rem, 3.1vw, 3.1rem)",
          { lineHeight: "1.04", letterSpacing: "-0.028em", fontWeight: "400" },
        ],
        sub: [
          "clamp(1.35rem, 2vw, 1.85rem)",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "400" },
        ],
        metric: [
          "clamp(2.8rem, 5.5vw, 5.4rem)",
          { lineHeight: "0.86", letterSpacing: "-0.045em", fontWeight: "300" },
        ],
      },
      borderRadius: {
        // Sistema quase reto: o arredondamento é a exceção, não o padrão.
        btn: "3px",
        card: "4px",
        media: "2px",
      },
      maxWidth: {
        shell: "1440px",
      },
      transitionTimingFunction: {
        out: "var(--ease-out)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 44s linear infinite",
      },
    },
  },
  plugins: [],
};
