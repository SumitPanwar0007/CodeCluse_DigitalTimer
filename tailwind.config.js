/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '10px 15px 15px -10px rgba(91, 91, 91, 0.9)',
      }
    },
  },
  plugins: [],
}

