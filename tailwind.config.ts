import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#09243C",
        blue: "#176B87",
        teal: "#2D9B91",
        mint: "#DCF5EA",
        cloud: "#F4FAF9",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(9, 36, 60, 0.10)",
        card: "0 12px 36px rgba(20, 75, 87, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
