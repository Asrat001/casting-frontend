/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
  
      "PoiretOne":["poiret-one"],
     "exo":["Exo","2"],
     "Montserrat":["Montserrat"]
    },
    extend: {
      backgroundImage:theme=>({
        "hero-bg":"url('https://res.cloudinary.com/diogyja1g/image/upload/v1695058369/bg_m30gul.jpg')",
        "baner-bg":"url('https://res.cloudinary.com/diogyja1g/image/upload/v1695577619/cus_hxbu9o.jpg')"
      }),
      dropShadow:{
        'xl':' 17px 17px 10px white'
      },
      animation: {
        blob: "blob 7s infinite",
        slideRight:"slideRight 2s ease-in-out"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        slideRight:{
          "0%": {
            transform:"translateX(100%)"
          },
          "100%": {
            transform: "translateX(0)"
          }
        }
      },


      
    },
  },
  plugins: [],
}

