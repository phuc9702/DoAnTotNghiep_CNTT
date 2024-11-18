/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
        primary: "#091a2b",
        main:"#005163",
        secondary:"#f1f3f4"
      },
      backgroundColor:{
        main:"#005163",
        primary: "#f1f3f4",
      },
      keyframes:{
        "scale-up-center": {
          from: {
            "-webkit-transform":" scale(1)",
                    transform: "scale(1)",
          },
          to: {
            "-webkit-transform": "scale(1.3)",
                    transform: "scale(1.3)",
          }
        }

      },
      animation: {
       "scale-up-center": "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;"
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}