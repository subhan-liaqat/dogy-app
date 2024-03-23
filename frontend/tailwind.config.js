/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
      },
      colors: {
        border_Color: "#E7DECD",
        bg_Color: "#FDFAF3",
        foreground: "#00000",
        "foreground-col": "#021927",
        state: {
          success: "#BAD36D",
        },
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      fontSize: {
        md: "1.25rem",
      },
    },
  },
  plugins: [],
};
