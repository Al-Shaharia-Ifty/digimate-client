/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#176F6B",
          secondary: "#FFC000",
          accent: "#dcfce7",
          neutral: "#f3f4f6",
          "base-100": "#ffffff",
          info: "#98a8dd",
          success: "#1bbb70",
          warning: "#df7e07",
          error: "#fa5c5c",
        },
      },
      {
        dark: {
          primary: "#D9F99D",
          secondary: "#Ffffff", //text color
          // secondary: "#FDE68A",
          accent: "#4B5563",
          neutral: "#263c40",
          "base-100": "#1F2937",
          info: "#4B5563",
          success: "#1BBB70",
          warning: "#F59E0B",
          error: "#FB7185",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
