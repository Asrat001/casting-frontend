import React from 'react'
import Navbar from './Navbar'
import hero from "../assets/hero.png"

const Hero = () => {
  return (
    <section className=' grid grid-cols-1 sm:grid-cols-2 p-8 mt-[100px] px-[60px]'>
    <main className='mt-[60px] '>
     <h1 className=' text-white font-bold text-[70px]'>we bring the Best talents </h1>
     <p className=' text-[20px]  text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio, animi nam odit provident atque.</p>
     <div className=' flex items-center gap-x-3 mt-6'>
     <button className=' p-3 border-[3px] border-white rounded-xl bg-green-400'>
            get started
        </button>
        <button className='p-3 border-[3px]  border-green-400 rounded-xl bg-white'>
            cast registeration
        </button>
     </div>
    </main>
    <img src={hero} alt='hero' className=' w-[600px]'/>
   
   
    </section>
  )
}

export default Hero