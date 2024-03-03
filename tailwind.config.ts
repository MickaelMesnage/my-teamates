import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          lighter: "#f2fcf3",
          base: "#afeaaa",
          darker: "#8fe288",
        },
        danger: {
          base: "#f1416c",
          darker: "#bb1549",
          lighter: "#FFF5F8",
        },
        success: {
          darker: "#62CF59",
          lighter: "#E8FFF3",
        },
        warning: {
          darker: "#E9B500",
          lighter: "#FFF8DD",
        },
        text: {
          primary: "#394855",
          secondary: "#747f88",
        },
      },
    },
  },
  plugins: [],
};
export default config;
