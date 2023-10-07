import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import {AiOutlineUser,AiFillPlusCircle} from 'react-icons/ai'
import {BiSolidDashboard} from "react-icons/bi"
import {IoNotificationsSharp} from "react-icons/io5"
import { GiHamburgerMenu } from 'react-icons/gi'


const AdminLayout = () => {
  return (
    <main className=' flex flex-col md:flex-row'>
        <nav className="    bg-gradient-to-br to-sky-800 from-slate-700 md:min-h-screen  mix-blend-hard-normal py-4 px-5 ">
        <button className=' block sm:hidden'>
      <GiHamburgerMenu className='w-12 h-12 text-gray-100'/>
    </button>    
    <div className='hidden md:block'>
    <h2 className=' text-[18px] font-Comfortaa text-gray-100 balance font-extrabold '>Energy casting Admin Dashbord</h2>
        <ul className=" mt-20 space-y-4 ">
     <li className=' bg-slate-50 w-44 h-fit px-4 flex items-center  justify-between'>
<NavLink to='/admin'>Dashboard</NavLink>
<BiSolidDashboard/>
     </li>
     <li className=' bg-slate-50 w-44 h-fit px-4 flex items-center  justify-between'>
<NavLink to="user">Mange users</NavLink>
<AiOutlineUser/>
     </li>
     <li className=' bg-slate-50 w-44 h-fit px-4 flex items-center  justify-between'>
<NavLink to="/register">Add cast</NavLink>
<AiFillPlusCircle/>
     </li>
     <li className=' bg-slate-50 w-44 h-fit px-4 flex items-center  justify-between'>
<NavLink to='order'>order</NavLink>
<IoNotificationsSharp/>
     </li>
     <li className=' bg-slate-50 w-44 h-fit px-4 flex items-center  justify-between'>
<NavLink to='order'>custom ord</NavLink>
<IoNotificationsSharp/>
     </li>
        </ul>
    </div>
        <ul>

        </ul>
      
        </nav>
        <div className=' w-full p-6'>
            <Outlet/>
        </div>
    </main>

  )
}

export default AdminLayout