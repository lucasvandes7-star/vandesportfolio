/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        surface: "#090b11",
        "surface-border": "#171c2a",
        card: "#0d1019",
        "card-hover": "#131826",
        primary: {
          DEFAULT: "#6366f1",
          hover: "#4f46e5",
          glow: "rgba(99, 102, 241, 0.25)"
        },
        accent: {
          cyan: "#06b6d4",
          purple: "#a855f7",
          amber: "#f59e0b",
          emerald: "#10b981"
        },
        text: {
          primary: "#f8fafc",
          secondary: "#94a3b8",
          muted: "#64748b"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(3, 4, 8, 1) 70%)',
        'glow-card': 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99, 102, 241, 0.12), transparent 40%)'
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(99, 102, 241, 0.3)',
        'glow-md': '0 0 35px -5px rgba(99, 102, 241, 0.4)',
        'glow-lg': '0 0 50px -10px rgba(99, 102, 241, 0.5)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
