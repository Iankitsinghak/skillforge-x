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
    float: false,    // Disables unused utilities
    clear: false,    // Reduces CSS bundle size
    // Add more disabled plugins if needed
  },
  // Optional: Further optimize for production
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
  },
};
