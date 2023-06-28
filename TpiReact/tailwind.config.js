/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlueBG: "#10141F",
        customRed: "#FC4747",
        navBarBG: "#161D2F",
      },
      screens: {
        xxs: "460px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [

    // require("@tailwindcss/forms")
  
  
  ],
};
