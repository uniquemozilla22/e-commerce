/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
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
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      // Input
      "input-background": "#F7F6F6",
      "input-text": "#6D6D6D",
      "input-border": "#EFEFEF",
      "input-dark-background": "#545454",
      "input-dark-text": "#EFEFEF",

      // Buttons
      "button-background-primary": "#373737",
      "button-background-secondary": "#",

      "button-text-color-primary": "#FFFFFF",
      "button-text-color-secondary": "#373737",
      "button-border": "#373737",
    },
  },
  plugins: [],
};
