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
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        display: [
          "clamp(2.75rem, 5.4vw, 5.25rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "300" },
        ],
        section: [
          "clamp(2.15rem, 3.6vw, 3.6rem)",
          { lineHeight: "1.02", letterSpacing: "-0.025em", fontWeight: "300" },
        ],
        metric: [
          "clamp(2.6rem, 5vw, 5rem)",
          { lineHeight: "0.9", letterSpacing: "-0.04em", fontWeight: "300" },
        ],
      },
      borderRadius: {
        btn: "8px",
        card: "16px",
        media: "22px",
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
