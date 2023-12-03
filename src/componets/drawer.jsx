import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/cast.png"
import { logout } from '../apiRequistes/fetchCasts';

const Drawer = ({ isdrawerOpen, toggleDrawer }) => {
  const user = JSON.parse(sessionStorage.getItem('user'));
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
 <div className=' flex justify-between items-center mt-6'>
 <img src={logo} alt="enrgy casting log" className=' w-[60px] h-[60px]  object-cover'/>
        <button 
      onClick={logout}
      className={`p-1 w-fit  ${user?` black`:` hidden`} border-[2px] rounded-lg  border-[#ED7D31]  flex justify-center items-center`}>
       log out
       </button>
 </div>
 <hr className=' bg-orange-700 mt-1'/>
        <ul className="p-4">
        <li className="py-2">
        <NavLink to='/' onClick={toggleDrawer} className='text-orange-600'>Home</NavLink>
       </li>
       <li className='py-2' onClick={toggleDrawer}>
       <NavLink to='/about' className='text-orange-600'>about</NavLink>
       </li>
       <li className='py-2' onClick={toggleDrawer}>
      {user?<NavLink to='/how' className='text-orange-600' >how</NavLink>: <NavLink to='/register' className='text-orange-600'>Register as Cast</NavLink>}
       </li>
       <li className='py-2' onClick={toggleDrawer}>
     {user?<NavLink to='/myprofile' className='text-orange-600'>My Profile</NavLink>:<NavLink to='/login' className='text-orange-600'>log in</NavLink>}
       </li>
        </ul>
  
      </div>
    </div>
  );
};

export default Drawer;