import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/cast.png"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
import { server } from '../server';
import { IoIosHome, IoIosLogIn } from 'react-icons/io';
import { FcAbout } from "react-icons/fc";
import { BsFillInfoSquareFill, BsFillQuestionCircleFill } from 'react-icons/bs';
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
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40 " onClick={toggleDrawer} />
      )}
      <div
        className={`bg-white w-full  h-screen p-4 fixed top-0 left-0 transform ${
          isdrawerOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-lg z-50 `}
      >
        <button className="absolute top-2 right-2 p-2" onClick={toggleDrawer}>
          <svg
            className="w-6 h-6"
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
   <button 
      onClick={()=>logout()}
      className={`p-1 w-fit  ${user?` black`:` hidden`}  rounded-lg  border-[2px] border-gray-900     flex justify-center items-center`}>
       log out
       </button> 
 </div>
 <hr className=' bg-orange-700 mt-1'/>
        <ul className="mt-3 space-y-3">
     
        {user?.isAdmin==true?<NavLink to={'/admin'} onClick={toggleDrawer} className='text-gray-800  p-1  border-[4px] rounded-full  border-gray-900 flex items-center w-1/2  justify-between'>{'Dashboard'}</NavLink>:<NavLink to={'/'} onClick={toggleDrawer} className='text-gray-800  p-1  border-[4px] rounded-full  border-gray-900 flex items-center w-1/2  justify-center gap-2'>{'home'} <IoIosHome/> </NavLink>}
       

     {user?.isAdmin==true?<NavLink to={'/admin/user'} className='text-gray-800  p-1  border-[4px] rounded-full  border-gray-900 flex items-center w-1/2  justify-between'>{'user Management'}</NavLink>:<NavLink to={'/about'} className='text-gray-800  p-1  border-[4px] rounded-full  border-gray-900 flex items-center w-1/2  justify-center gap-2'>{'about'} <BsFillInfoSquareFill/> </NavLink>}
     
       
      {user?.isAdmin==true?<NavLink to='/register' className='text-gray-800  p-1  border-[4px] rounded-full  border-gray-900 flex items-center w-1/2  justify-between' >Register Cast</NavLink>: <NavLink to='/how' className='text-gray-800  p-1  border-[4px] rounded-full  border-gray-900 flex items-center w-1/2  justify-center gap-2'>How it works<BsFillQuestionCircleFill/> </NavLink>  }
       

       {user?.isAdmin==true?<NavLink to='/order' className='text-gray-800  p-1  border-[4px] rounded-full  border-gray-900 flex items-center w-1/2 gap-2' >Order</NavLink>:<NavLink to='/register' className='text-gray-800  p-1  border-[4px] rounded-full  border-gray-900 flex  justify-center items-center w-1/2 gap-2'>Register as Cast <IoIosLogIn size={18}/> </NavLink> }
       
       
       {user?.isAdmin==true?<NavLink to='/order' className='text-gray-800  p-1  border-[4px] rounded-full  border-gray-900 flex items-center w-1/2 gap-2' >Custom Order</NavLink>: 
     <NavLink to='/login' className='text-gray-800  p-1  border-[4px] rounded-full  border-gray-900 flex items-center w-1/2  justify-center gap-2'>Login <IoIosLogIn size={18}/> </NavLink> }
       

        </ul>
  
      </div>
    </div>
  );
};

export default Drawer;