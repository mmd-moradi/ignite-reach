import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary:{
          500: "#100D26"
        },
        secondary: {
          500: "#3498DB"
        },
        tertiary: {
          500: "#205ED0"
        },
        primaryButton: {
          500: "#2874A6"
        },
        primaryButtonHover: {
          500: "#3A90CC"
        },
        secondaryGradient: {
          500: "#1A172F"
        },
        tertiaryGradient: {
          500: "#1F1C33"
        },
        primaryBlack: {
          500: "#0C0C0C"
        },
        secondaryBalck: {
          500: "#1B1B1B"
        },
        primaryFont: {
          500: "#272A31"
        },
        secondaryFont: {
          500: "#333333"
        },
        tertiaryFont: {
          500: "#E6E6E6"
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config