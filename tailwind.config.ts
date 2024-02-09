import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
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
      colors: {
        turquoise: "#01989F",
        "light-gray":"#DADEE7",
        "light-cyan":"#00D4D4",
        "aquamarine":"#16FACD",
        "orange-red":"#CC4C4C",
        "charcoal":"#13181E"

      },
      backgroundImage: {
        "gradient-sidebar":
          "linear-gradient(180deg, #212A34 0%, #13181E 100%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
