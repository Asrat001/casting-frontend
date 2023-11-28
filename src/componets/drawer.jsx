import React from 'react';
import { NavLink } from 'react-router-dom';

const Drawer = ({ isdrawerOpen, toggleDrawer }) => {
  return (
    <div>
      {isdrawerOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={toggleDrawer} />
      )}
      <div
        className={`bg-white w-64 h-screen fixed top-0 left-0 transform ${
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
        <ul className="p-4">
        <li className="py-2">
        <NavLink to='/' onClick={toggleDrawer} className='text-orange-600'>Home</NavLink>
       </li>
       <li className='py-2' onClick={toggleDrawer}>
       <NavLink to='/about' className='text-orange-600'>about</NavLink>
       </li>
       <li className='py-2' onClick={toggleDrawer}>
       <NavLink to='/how' className='text-orange-600' >how</NavLink>
       </li>
       <li className='py-2' onClick={toggleDrawer}>
       <NavLink to='/custome' className='text-orange-600'>order what you want</NavLink>
       </li>
       <li className='py-2' onClick={toggleDrawer}>
       <NavLink to='/register' className='text-orange-600'>register as a cast</NavLink>
       </li>
       <li className='py-2' onClick={toggleDrawer}>
       <NavLink to='/myprofile' className='text-orange-600'>My Profile</NavLink>
       </li>

        </ul>
      </div>
    </div>
  );
};

export default Drawer;