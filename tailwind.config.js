/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#050507",
          850: "#08080C",
          800: "#0D0D13",
          700: "#14141C",
        },
        line: {
          soft: "rgba(255,255,255,0.07)",
          mid: "rgba(255,255,255,0.12)",
        },
        content: {
          hi: "#F4F6FA",
          mid: "#A8B0BF",
          low: "#7D8595",
        },
        violet: {
          300: "#C4B5FD",
          400: "#A855F7",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
        },
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        pill: "999px",
        card: "20px",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'pulse-dot': 'pulseDot 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
