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
        green1: "#1F4529",
        green2: "#47663B",
        white: "#E8ECD7",
        creme: "#EED3B1",
      },
      backgroundImage: {
        render1: "url('/render1.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
