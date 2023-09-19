import React from 'react'
import logo from '../assets/logo.png'
import {BsPersonPlusFill} from 'react-icons/bs'


function Navbar() {
  return (
  <nav className='flex justify-between items-center px-8 '>
    <img src={logo} className='w-28 h-28'/>
     <ul className=' flex justify-center items-center gap-x-4'>
       <li>
        home
       </li>
       <li>
        about
       </li>
     <li>register</li>
     </ul>
      <div className='p-3 h-16 w-16 rounded-full border-[4px] border-green-400 flex justify-center items-center'>
<BsPersonPlusFill className='w-7 h-7 text-white '/>
<p className=' text-red-500 relative top-[-4px] left-0 '>0</p>
      </div>
  </nav>
  )
}

export default Navbar