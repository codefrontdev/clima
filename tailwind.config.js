/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue: "#083747",
        lightBlue: "#00AEEF",
        white: "#FFFFFF",
        gray: {
          default: "#949494",
          light: "#F2F2F2",
          dark: "#4A4A4A",
        },
      },
      fontSize: {
        heading1: "40px",
        heading2: "32px",
        paragraph1: "24px",
        paragraph2: "20px",
      },
    },
  },
  plugins: [],
};
