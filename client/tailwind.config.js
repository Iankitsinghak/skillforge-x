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
  plugins: [
    require("@tailwindcss/forms"), 
    require("@tailwindcss/typography"), 
  ],
  corePlugins: {
    preflight: true, 
  },
}
