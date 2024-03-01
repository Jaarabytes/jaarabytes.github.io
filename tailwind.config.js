// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: "rgb(57, 255, 20)",
        blackpen: "#333333",
        whitepen: "#ffffff",
        sharingan : "#FF0000"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
