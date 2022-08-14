/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#176F6B",
          secondary: "#FFC000",
          accent: "#FFEDD5",
          neutral: "#f3f4f6",
          "base-100": "#ffffff",
          info: "#98a8dd",
          success: "#1bbb70",
          warning: "#df7e07",
          error: "#fa5c5c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
