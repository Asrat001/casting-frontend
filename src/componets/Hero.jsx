import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Slider from './Slider'

const Hero = () => {
  return (
    <section className=' bg-[#ED7D31]  mt-[80px]   grid grid-cols-1 sm:grid-cols-2 place-items-center p-10 h-auto'>
    <main className=''>
     <h1 className='  font-PoiretOne  text-[60px] sm:text-[70px]  balance  bg-gradient-to-tr from-white  to-gray-100 bg-clip-text text-transparent'>  Best Talents </h1>
     <p className=' text-[15px]  text-white font-semibold  balance'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio, animi nam odit provident atque.</p>
     <div className=' flex items-center gap-x-1.5 sm:gap-x-3 mt-6'>
     <Link to='/custome' className=' w-fit h-fit sm:p-2 border-[3px] rounded-lg  border-gray-100  bg-gradient-to-r from-blue-600  to-[#3E8ED1]  font-semibold text-white flex gap-x-6 items-center justify-center'>
            Custome Oreder <AiOutlineArrowRight className=' text-gray-800'/>
        </Link>
  
            <Link to='/register' className=' w-fit h-fit sm:p-2 rounded-lg border-[3px] font-semibold text-gray-800  border-[#3E8ED1] gap-x-6  bg-white flex items-center justify-center'>
              Cast Registeration <AiOutlineArrowRight/>
            </Link>
        
     </div>
    </main>
 
 <div className='  md:ml-8 p-10 sm:p-0  flex justify-center items-center'>
 <Slider/>
 </div>



   
   
    </section>
  )
}

export default Hero