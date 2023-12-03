import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Slider from './Slider'

const Hero = () => {
  return (
    <section className='   mt-[60px]    grid grid-cols-1 sm:grid-cols-2 place-items-center p-6 sm:p-10 h-screen'>
    <main className=''>
     <h1 className=' text-black  font-PoiretOne  text-[60px] sm:text-[70px]  balance  '>  Best Talents </h1>
     <p className=' text-[15px]  text-black font-semibold  balance'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio, animi nam odit provident atque.</p>
     <div className=' flex  items-center gap-x-3 sm:gap-x-3 mt-6'>
     <Link to='/custome' className=' w-fit h-10 p-2 border-[3px] rounded-lg  border-gray-600  bg-gradient-to-r from-blue-600  to-[#3E8ED1]  font-semibold text-white flex gap-x-6 items-center justify-center'>
             Order <AiOutlineArrowRight className=' text-gray-800'/>
        </Link>
  
            <Link to='/register' className=' w-fit h-10 p-2 rounded-lg border-[3px] font-semibold text-gray-800  border-[#3E8ED1] gap-x-6  bg-white flex items-center justify-center'>
              Register<AiOutlineArrowRight/>
            </Link>
        
     </div>
    </main>
 
 <div className='w-full h-full hidden md:block'>
<Slider/>
 </div>



   
   
    </section>
  )
}

export default Hero