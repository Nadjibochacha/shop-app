/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        primary: "#edba74",
        secondary: "#ed8900"
      },
      container : {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3em",
        }
      }
    },
  },
  plugins: [],
}

