/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "neon" : "rgb(57, 255, 20)",
        "blackpen" : "#333333",
        "whitepen" : "#ffffff"
      }
    },
  },
  plugins: [],
}

