import React from 'react'
import Navbar from './Navbar'
import hero from "../assets/hero.png"
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className=' grid grid-cols-1 sm:grid-cols-2 p-8 mt-[50px] px-[60px] h-auto sm:h-[90vh]'>
    <main className=' '>
     <h1 className=' text-white font-bold text-[70px]  '>we bring the Best talents </h1>
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
  <div>
  <img src={hero} alt='hero' className=' w-[600px]'/>
  <div className=' filter relative top-[-270px] right-[-370px]  drop-shadow-xl invert-[70%]  w-4 h-6  '/>
  </div>
   
   
    </section>
  )
}

export default Hero