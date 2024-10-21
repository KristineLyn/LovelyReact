import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
      colors: {
        pink: {
          100: '#ffe0f0',
          200: '#ffbdd4',
          600: '#ff6b6b',
          800: '#d22f2f',
        },
      },
    },
  },
  plugins: [],
};
export default config;
