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
        green1: "#CBF9B1",
        green2: "#51A416",
        green3: "#2C6B10",
        white: "#F2F9CF",
        black: "#212121",
      },
      backgroundImage: {
        render1: "url('/render1.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
