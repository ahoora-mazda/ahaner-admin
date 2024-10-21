/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        borderSidebar: "#EAEFF4",
        bgAuth: "#F2F6FA",
        inputBorder: "#e5eaef",
        primary: "#5D87FF",
        subPrimary: "#4570EA",
        light: "#E8F7FF",
        info: "#ECF2FF",
        yellowLight: "#FEF5E5",
        redLight: "#FDEDE8",
        greenLight: "#E6FFFA",
        yellow: "#FFAE1F",
        lightBlue: "#49BEFF",
        green: "#13DEB9",
        text: "#2a3547",
        red: {
          DEFAULT: "#FA896B",
        },
        purple: "#EFF9FF",
      },
    },
  },
  plugins: [],
};
