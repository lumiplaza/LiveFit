/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", "./index.html" // Asegúrate de que Tailwind escanee tus archivos de React
    ],
    theme: {
      extend: {
        fontFamily: {
          rocksalt: ["rocksalt", "sans-serif"],
          spicy: ["spicy", "sans-serif"],
        },
        fontSize: {
          'custom-size': '2.5rem',
        },
      },
    },
    plugins: [],
  }