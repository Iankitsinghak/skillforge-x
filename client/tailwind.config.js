/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // ⚡ Use system-based dark mode to avoid 'white screen' issue
  darkMode: "media", // or remove this line to use default
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        foreground: "#1f1f1f",
        accent: "#7e22ce", // purple-ish
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
