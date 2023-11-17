import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import {AiOutlineUser,AiFillPlusCircle} from 'react-icons/ai'
import {BiSolidDashboard} from "react-icons/bi"
import {IoNotificationsSharp} from "react-icons/io5"
import { GiHamburgerMenu } from 'react-icons/gi'


const AdminLayout = () => {
  return (
    <main className=' flex flex-col md:flex-row'>
        <nav className="    bg-white md:min-h-screen  mix-blend-hard-normal py-4 px-5 ">
        <button className=' block sm:hidden'>
      <GiHamburgerMenu className='w-12 h-12 text-gray-100'/>
    </button>    
    <div className='hidden md:block'>
    <h2 className=' text-[18px]  text-black balance font-extrabold '>Energy casting Admin Dashbord</h2>
    <hr/>
        <ul className=" mt-20 space-y-4 ">
     <li className=' bg-[#ECF3F7]   p-4 px-4 flex items-center gap-2 rounded-xl shadow-lg shadow-gray-600 '>
  
     <div className='p-1  bg-white h-fit w-fit rounded-full'>
     <BiSolidDashboard size={28}/>
          </div>
<NavLink to='/admin'>Dashboard</NavLink>

     </li>
     <li className=' bg-[#ECF3F7]   p-4 px-4 flex items-center gap-2 rounded-xl shadow-lg shadow-gray-600 '>
  
     <div className='p-1  bg-white h-fit w-fit rounded-full'>
     <AiOutlineUser size={28}/>
          </div>
<NavLink to="user">Mange users</NavLink>

     </li>
     <li className='bg-[#ECF3F7]   p-4 px-4 flex items-center gap-2 rounded-xl shadow-lg shadow-gray-600 '>
   
     <div className='p-1  bg-white h-fit w-fit rounded-full'>
     <AiFillPlusCircle size={28}/>
          </div>
<NavLink to="/profile">Add cast</NavLink>

     </li>
     <li className=' bg-[#ECF3F7]   p-4 px-4 flex items-center gap-2 rounded-xl shadow-lg shadow-gray-600 '>
  
     <div className='p-1  bg-white h-fit w-fit rounded-full'>
          <IoNotificationsSharp size={28} className=' text-gray-500'/>
          </div>
<NavLink to='order'>order</NavLink>

     </li>
     <li className=' bg-[#ECF3F7]   p-4 px-4 flex items-center gap-2 rounded-xl shadow-lg shadow-gray-600  '>
          <div className='p-1  bg-white h-fit w-fit rounded-full'>
          <IoNotificationsSharp size={28} className=' text-gray-500'/>
          </div>

<NavLink to='order'>custom order</NavLink>

     </li>
        </ul>
    </div>
        <ul>

        </ul>
      
        </nav>
        <div className=' w-full p-6 bg-[#EAEBEC]'>
            <Outlet/>
        </div>
    </main>

  )
}

export default AdminLayout