import React from 'react'
import Navbar from './Navbar'
import hero from "../assets/hero.png"
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Slider from './Slider'

const Hero = () => {
  return (
    <section className='  grid grid-cols-1 sm:grid-cols-2 px-6 py-6 mt-[50px] sm:px-[60px] h-auto sm:h-[90vh]'>
    <main className=' '>
     <h1 className=' font-extrabold font-Comfortaa  text-[60px] sm:text-[70px]  balance  bg-gradient-to-r from-green-400  to-yellow-600 bg-clip-text text-transparent'>we bring the Best talents </h1>
     <p className=' text-[16px]   text-gray-300 font-semibold balance'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio, animi nam odit provident atque.</p>
     <div className=' flex items-center gap-x-1.5 sm:gap-x-3 mt-6'>
     <Link to='/custome' className=' w-fit h-fit sm:p-2 border-[3px]  border-gray-100 bg-green-400 font-semibold text-white flex gap-x-6 items-center justify-center'>
            custome oreder <AiOutlineArrowRight className=' text-gray-800'/>
        </Link>
  
            <Link to='/register' className=' w-fit h-fit sm:p-2 border-[3px] font-semibold text-gray-800  border-green-400 gap-x-6  bg-white flex items-center justify-center'>
              Cast Registeration <AiOutlineArrowRight/>
            </Link>
        
     </div>
    </main>
 
 <div className=' md::ml-8 p-4 sm:p-0  flex justify-center items-center'>
 <Slider/>
 </div>



   
   
    </section>
  )
}

export default Hero