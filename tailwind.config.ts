import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green1: "#C4D5C5",
        green2: "#6F8E74",
        green3: "#A4B509",
        brown: "#444003",
        black: "#162607",
        signature: "#555",
        signature_text: "#aaa",
      },
      backgroundImage: {
        render1: "url('/render1.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
