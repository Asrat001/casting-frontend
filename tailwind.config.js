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
        "hero-bg":"url('https://res.cloudinary.com/diogyja1g/image/upload/v1695058369/bg_m30gul.jpg')"
      }),
      dropShadow:{
        'xl':' 17px 17px 10px white'
      }

      
    },
  },
  plugins: [],
}

