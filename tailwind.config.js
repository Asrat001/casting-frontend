/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Comfortaa':['Comfortaa'],
      'Poppins'   :['Poppins']
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
      },

      
    },
  },
  plugins: [],
}

