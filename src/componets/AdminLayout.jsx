import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import {AiOutlineUser,AiFillPlusCircle} from 'react-icons/ai'
import {BiSolidDashboard} from "react-icons/bi"
import {IoNotificationsSharp} from "react-icons/io5"


const AdminLayout = () => {
  return (
    <main className=' flex'>
        <nav className="  bg-gradient-to-br to-sky-800 from-slate-700 min-h-screen  mix-blend-hard-normal py-4 px-5 ">
        <h2 className=' text-[18px] font-Comfortaa text-gray-100 balance font-extrabold '>Energy casting Admin Dashbord</h2>
        <ul className=" mt-10 space-y-4">
     <li className=' bg-slate-50 w-44 h-fit px-4 flex items-center  justify-between'>
<NavLink>Dashboard</NavLink>
<BiSolidDashboard/>
     </li>
     <li className=' bg-slate-50 w-44 h-fit px-4 flex items-center  justify-between'>
<NavLink>Mange users</NavLink>
<AiOutlineUser/>
     </li>
     <li className=' bg-slate-50 w-44 h-fit px-4 flex items-center  justify-between'>
<NavLink>Add cast</NavLink>
<AiFillPlusCircle/>
     </li>
     <li className=' bg-slate-50 w-44 h-fit px-4 flex items-center  justify-between'>
<NavLink>order</NavLink>
<IoNotificationsSharp/>
     </li>
     <li className=' bg-slate-50 w-44 h-fit px-4 flex items-center  justify-between'>
<NavLink>custom ord</NavLink>
<IoNotificationsSharp/>
     </li>
        </ul>
      
        </nav>
        <div className=' w-full p-6'>
            <Outlet/>
        </div>
    </main>

  )
}

export default AdminLayout