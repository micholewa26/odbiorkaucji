import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk Variable'", "sans-serif"],
        sans: ["'Inter Variable'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 30px hsl(152 70% 45% / 0.3)",
        "glow-strong": "0 0 50px hsl(152 70% 45% / 0.4)",
        strong: "0 20px 50px hsl(0 0% 0% / 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;
