import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1180px"
      }
    },
    extend: {
      colors: {
        bg: "#f8f7f4",
        surface: "#ffffff",
        panel: "#f3f7fe",
        line: "#d7dfec",
        text: "#132238",
        muted: "#52607a",
        brand: "#0b4f6c",
        accent: "#ca8a04",
        deep: "#10243e",
        soft: "#e8eff9"
      },
      fontFamily: {
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "serif"],
        body: ["Avenir Next", "Manrope", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        card: "0 10px 28px rgba(19, 34, 56, 0.08)",
        lift: "0 18px 38px rgba(19, 34, 56, 0.12)"
      },
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        floatSlow: "floatSlow 11s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
