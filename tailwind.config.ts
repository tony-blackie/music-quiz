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
        // mango: {
        //   "50": "#fff9eb",
        //   "100": "#fdecc8",
        //   "200": "#fad78d",
        //   "300": "#f9c668",
        //   "400": "#f6a529",
        //   "500": "#f08310",
        //   "600": "#d45f0b",
        //   "700": "#b0410d",
        //   "800": "#8f3211",
        //   "900": "#762a11",
        //   "950": "#441204",
        // },
        // blue-chill
        mango: {
          "50": "#f2f9f9",
          "100": "#ddeff0",
          "200": "#bfe0e2",
          "300": "#92cace",
          "400": "#5faab1",
          "500": "#438e96",
          "600": "#3b757f",
          "700": "#356169",
          "800": "#325158",
          "900": "#2d464c",
          "950": "#1a2c32",
        },
      },
    },
  },
  plugins: [],
};
export default config;
