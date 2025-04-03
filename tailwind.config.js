/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./assets/Hero Section image.png')",
        highlight: "url('./assets/Highlights Image.png')",
        plainBackground:"url('./assets/plain-black-background.jpg')",
        aboutImage:"url('./assets/About The Developer/image 45.png')",
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
