/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF8F1",
        foreground: "#3B1F14",
        primary: "#7B2C2C",
        secondary: "#F3E2D3",
        accent: "#D88A3D",
        muted: "#EAD7C5",
        border: "#E2CBB3",
        card: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
