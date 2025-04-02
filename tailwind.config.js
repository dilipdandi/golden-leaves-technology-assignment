/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/Hero Section image.png')",
        highlight: "url('./assets/Highlights Image.png')",
      },
      colors: {
        primaryYellow: "#CF9A2C",
      },
      backgroundColor: {
        primaryBackground: "#EAE9E9",
      },
    },
  },
  plugins: [],
};
