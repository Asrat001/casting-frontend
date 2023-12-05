import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/cast.png"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { server } from '../server';

const Drawer = ({ isdrawerOpen, toggleDrawer}) => {

  const navigate=useNavigate()
  const user = JSON.parse(sessionStorage.getItem('user'));
  const logout = async ()=>{
   
    try {
     await axios.post(`${server}/api/user/logout`,{withCredentials:true}).then((res)=>{
     
        if(res.status==201){
          sessionStorage.removeItem('user');
          navigate('/')
        }
     })
    } catch (error) {
      console.log(error)
    }
}
  return (
    <div>
      {isdrawerOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={toggleDrawer} />
      )}
      <div
        className={`bg-white w-64 h-screen p-4 fixed top-0 left-0 transform ${
          isdrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-lg z-50 rounded-r-2xl`}
      >
        <button className="absolute top-2 right-2 p-2" onClick={toggleDrawer}>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
 <div className=' flex justify-between items-center  mb-2 mt-6'>
   <div>
   <img src={logo} alt="enrgy casting log" className=' w-[60px] h-[60px]  object-cover'/>
   <p className=' font-semibold text-[12px] text-gray-600'>Energy Film Production</p>
   </div>
 <img src={user?.img} alt='profile pic' className={` ${user? 'block':' hidden'} w-12 h-12 rounded-full  border-[3px]  border-[#ED7D31]  object-cover`}/>
 
 </div>
 <hr className=' bg-orange-700 mt-1'/>
        <ul className="mt-3 space-y-3">
        <li className="p-2 shadow-lg shadow-gray-300 rounded-lg bg-[#E6EEFB]">
        {user?.isAdmin==true?<NavLink to={'/admin'} onClick={toggleDrawer} className='text-gray-800'>{'Dashboard'}</NavLink>:<NavLink to={'/'} onClick={toggleDrawer} className='text-gray-800'>{'home'}</NavLink>}
       </li>
       <li className='p-2 shadow-lg shadow-gray-300 rounded-lg bg-[#E6EEFB]' onClick={toggleDrawer}>
     {user?.isAdmin==true?<NavLink to={'/user'} className='text-gray-800'>{'user Management'}</NavLink>:<NavLink to={'/about'} className='text-gray-800'>{'about'}</NavLink>}
       </li>
       <li className='p-2 shadow-lg shadow-gray-300 rounded-lg bg-[#E6EEFB]' onClick={toggleDrawer}>
      {user?.isAdmin==true?<NavLink to='/register' className='text-gray-800' >Register Cast</NavLink>: <NavLink to='/how' className='text-gray-800'>How it works</NavLink>  }
       </li>
       <li className='p-2 shadow-lg shadow-gray-300 rounded-lg bg-[#E6EEFB]' onClick={toggleDrawer}>
       {user?.isAdmin==true?<NavLink to='/order' className='text-gray-800' >Order</NavLink>: user?<NavLink to='/myprofile' className='text-gray-800'>Myprofile</NavLink> :<NavLink to='/register' className='text-gray-800'>Register as Cast</NavLink> }
       </li>
       <li className='p-2 shadow-lg shadow-gray-300 rounded-lg bg-[#E6EEFB]' onClick={toggleDrawer}>
       {user?.isAdmin==true?<NavLink to='/order' className='text-gray-800' >Custom Order</NavLink>: user?       <button 
      onClick={()=>logout()}
      className={`p-1 w-fit  ${user?` black`:` hidden`}  rounded-lg    flex justify-center items-center`}>
       log out
       </button> :<NavLink to='/login' className='text-gray-800'>Login</NavLink> }
       </li>

        </ul>
  
      </div>
    </div>
  );
};

export default Drawer;