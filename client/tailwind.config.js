module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
      },
    },
  },
  plugins: [],
  corePlugins: {
    float: false,
    clear: false,
  },
};
