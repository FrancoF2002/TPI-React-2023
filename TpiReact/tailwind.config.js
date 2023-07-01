/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlueBG: "#10141F",
        customRed: "#FC4747",
        navBarBG: "#161D2F",
        customGreen: "#4BB543"
      },
      screens: {
        xxs: "460px",
      },
    },
  },
  plugins: [],
};
