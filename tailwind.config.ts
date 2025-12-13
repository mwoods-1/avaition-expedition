import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a1428",
          blue: "#1e5a96",
          cyan: "#00d4ff",
          gold: "#ffa500",
          "text-light": "#f0f4f8",
          "text-muted": "#a8b8cc",
          "card-bg": "#0f1f35",
        },
      },
      fontFamily: {
        syne: ["'Syne'", "sans-serif"],
        fraunces: ["'Fraunces'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0a1428 0%, #0d1a2e 50%, #1a0f2e 100%)",
        "gradient-header": "linear-gradient(180deg, rgba(10, 20, 40, 0.95) 0%, rgba(10, 20, 40, 0.7) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
