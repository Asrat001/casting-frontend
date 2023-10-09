import React from 'react'
import {BsPersonPlusFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import logo from "../assets/cast.png"


function Navbar() {
  return (
  <nav className='flex justify-between items-center px-6 sm:px-8  py-5'>
    <button className=' block sm:hidden'>
      <GiHamburgerMenu className='w-12 h-12 text-gray-800'/>
    </button>
    <div className=' ml-[60px] mt-12'>
      <img src={logo} alt="enrgy casting log" className='w-[150px] h-[150px] object-cover'/>
    </div>
     <ul className=' sm:flex justify-center items-center gap-x-4 hidden '>
       <li>
        <NavLink to='/' className='text-gray-300 text-[18px]'>home</NavLink>
       </li>
       <li>
        <NavLink to='/about' className='text-gray-300 text-[18px]'>about</NavLink>
       </li>
       <li>
       <NavLink to='/login' className='text-gray-300 text-[18px]'>login</NavLink>
       </li>
       <li className=' border-dotted  border-[4px] p-2  border-green-700'>
        <NavLink to='/how' className='text-gray-300 text-[18px]'>how it works</NavLink>
       </li>
        
     </ul>
      <div className='p-3 h-16 sm:w-16 rounded-full border-[4px] border-green-400 flex justify-center items-center'>
<BsPersonPlusFill className='w-7 h-7 text-gray-300 '/>
<p className=' text-red-500 relative top-[-4px] left-0 '>0</p>
      </div>
  </nav>
  )
}

export default Navbar