import React from 'react'
import Navbar from './Navbar'
import hero from "../assets/hero.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className=' grid grid-cols-1 sm:grid-cols-2 p-8 mt-[50px] sm:px-[60px] h-auto sm:h-[90vh]'>
    <main className=' '>
     <h1 className=' font-bold  text-[50px] sm:text-[70px]  balance  bg-gradient-to-r from-green-400 to-emerald-200 bg-clip-text text-transparent'>we bring the Best talents </h1>
     <p className=' text-[20px]  text-white'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore optio, animi nam odit provident atque.</p>
     <div className=' flex items-center gap-x-3 mt-6'>
     <button className=' p-3 border-[3px] border-white rounded-xl bg-green-400'>
            how it works !


        </button>
  
            <Link to='/register' className='p-3 border-[3px]  border-green-400 rounded-xl bg-white'>
              Cast Registeration
            </Link>
        
     </div>
    </main>
  <div className='filter  drop-shadow-xl invert-[20%]'>
  <img src={hero} alt='hero' className=' w-[600px]   '/>

  </div>
   
   
    </section>
  )
}

export default Hero