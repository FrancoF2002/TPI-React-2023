/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlueBG: "#10141F",
        customRed: "#FC4747",
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
