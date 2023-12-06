import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Slider from './Slider'

const Hero = () => {
  return (
    <section className=' grid grid-cols-1 sm:grid-cols-2 place-items-center h-screen'>
    <main className= 'p-6 md:p-12 space-y-6'>
     <h1 className=' bg-gradient-to-r from-orange-600 via-yellow-600 to-indigo-600 inline-block text-transparent bg-clip-text  font-Montserrat   text-[25px] sm:text-[50px]  balance  '> Connecting Ethiopia's Top Talent with the Best Producers</h1>
     <p className=' text-[15px]   text-gray-800  font-extrabold '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio, animi nam odit provident atque.</p>
     <div className=' flex  items-center gap-x-3 sm:gap-x-3 mt-6'>
     <Link to='/custome' className=' w-fit h-12 p-2 border-[1px] rounded-lg text-[12px] s  border-gray-600  bg-gradient-to-r from-blue-600  to-[#3E8ED1]  font-semibold text-white flex gap-x-6 items-center justify-center'>
             Order Us <AiOutlineArrowRight className=' text-white'/>
        </Link>
  
            <Link to='/register' className=' w-fit h-12 p-2 rounded-lg border-[1px] text-[12px] font-semibold text-gray-800  border-[#3E8ED1] gap-x-6  bg-white flex items-center justify-center'>
              Register as a Cast<AiOutlineArrowRight/>
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