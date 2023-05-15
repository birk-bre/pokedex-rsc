/** @type {import('tailwindcss').Config} */
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
      boxShadow: {
        cardShadow: `-5px -5px 5px -5px #00e7ff, 5px 5px 5px -5px #ff00e7, -7px -7px 10px -5px transparent, 7px 7px 10px -5px transparent, 0 0 5px 0px rgba(255, 255, 255, 0), 0 55px 35px -20px rgba(0, 0, 0, 0.5)`,
        cardShadowHover: `-20px -20px 30px -25px #00e7ff,
    20px 20px 30px -25px #ff00e7, -7px -7px 10px -5px #00e7ff,
    7px 7px 10px -5px #ff00e7, 0 0 13px 4px rgba(255, 255, 255, 0.3),
    0 55px 35px -20px rgba(0, 0, 0, 0.5)`,
      },
    },
  },
  plugins: [],
};
