import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: "#02718A",
          hover: "#015669",
          light: "#0388A6",
          subtle: "#D6F2F7",
        },
        bkash: "#D8225B",
        nagad: "#F7941D",
      },
    },
  },
  plugins: [],
};
export default config;