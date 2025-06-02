import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
      colors: {
        primary: {
          DEFAULT: "#3600a9",
          light: "#5e2fd6",
          dark: "#23006e",
        },
        accent: {
          DEFAULT: "#fad776",
          light: "#ffe9a7",
          dark: "#c7a84e",
        },
        secondary: {
          DEFAULT: "#2563eb",
          light: "#60a5fa",
          dark: "#1e40af",
        },
        neutral: {
          DEFAULT: "#f5f5f5",
          dark: "#22223b",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
