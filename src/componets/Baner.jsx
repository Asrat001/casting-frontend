import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Baner = () => {
  return (
    <div className=' relative bg-gradient-to-tr  from-[#243046] to-[#ED7D31]/70 min-h-screen   '>
        <div className=' absolute bg-baner-bg bg-cover bg-no-repeat min-h-screen  mix-blend-hard-light sm:pl-12 pl-4 py-8 '>
        <main className='grid grid-cols-1 sm:grid-cols-2 '>
   <div className=' mt-24 sm:mt-36'>
   <h1 className='  text-[40px] sm:text-[70px]  balance  text-white'>you went Somting Uinque </h1>
         <p className='text-[18px] text-white font-extrabold font-Comfortaa balance '>fill what exactly what you went we got you covered</p>
         <Link to="/custome" className=' w-fit flex items-center justify-center bg-white p-2 mt-4 text-gray-700  font-Comfortaa gap-x-4 border-[4px] border-[#ED7D31]'>
            custome oreder<AiOutlineArrowRight/>
         </Link>
   </div>
        </main>
        </div>
    </div>
  )
}

export default Baner