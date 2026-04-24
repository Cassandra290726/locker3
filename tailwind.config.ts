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
        locker: {
          coral: "#EF5B5B",
          rose: "#FF7F96",
          mint: "#CEFFB4",
          sky: "#B6F0FF",
          lilac: "#C9A7EB",
        },
      },
      boxShadow: {
        "focus-rose": "0 0 0 3px #FF7F96, 0 0 20px rgba(255, 127, 150, 0.55)",
        "focus-mint": "0 0 0 3px #CEFFB4, 0 0 20px rgba(206, 255, 180, 0.55)",
        "focus-sky": "0 0 0 3px #B6F0FF, 0 0 20px rgba(182, 240, 255, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
