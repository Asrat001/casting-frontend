import React, { useEffect, useState } from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import logo from "../assets/cast.png"
import { useShoppingCart } from '../Context/CartContext'
import Modal from './Modal'
import Drawer from './drawer'
import { AiFillDelete } from 'react-icons/ai'
import { IoIosNotifications } from "react-icons/io";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const {openCart,state, dispatch} = useShoppingCart()
  const [isOpen , setOpen]=useState(false)

  const [isdrawerOpen, setIsdrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsdrawerOpen(!isdrawerOpen);
  };
  const user = JSON.parse(sessionStorage.getItem('user'));
  


  useEffect(() => {   
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <React.Fragment >
 
      <nav className={` w-full fixed   left-0 top-0  ${scrolled ? `  bg-white`:` bg-transparent`}  justify-between  z-20 flex    sm:gap-[100px] items-center px-6 py-2  sm:px-8`}>
      <div className="cursor-pointer md:hidden" onClick={toggleDrawer}>
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      <div className=' sm:flex items-center gap-1 hidden  '>
      <img src={logo} alt="enrgy casting log" className=' w-[60px] h-[60px]  object-cover'/>
      <h1 className=''><span className='  font-extrabold text-indigo-900 '>Energy</span> Casting</h1>
      </div>
<div className=' flex items-center gap-4'>
 {user?.isAdmin==true?  <NavLink
      className={`border-[1px]  p-1 ${scrolled?' text-gray-900 border-gray-800':'text-gray-900 md:text-white border-orange-700'}   font-extrabold`}
      to='/admin'
      >Dashboard</NavLink>:     <NavLink
      className={`border-[1px]  p-1 ${scrolled?' text-gray-900 border-gray-800':'text-gray-900 md:text-white border-orange-700'}   font-extrabold`}
      to='/login'
      >Login</NavLink>}
      <button 
      onClick={()=>{setOpen(true)}}
      className={`p-2 h-12 w-12 rounded-full ${user?` hidden`:``} border-[2px] ${scrolled?'border-gray-800':'border-orange-600'}   flex justify-center items-center`}>
        <FaCartArrowDown  className={`${scrolled?'text-[#ED7D31]':'text-gray-900  smtext-indigo-900'}   `} size={18}/> 
      <p className={` text-orange-600 relative top-[-5px] left-[2px] ${state.length>0 ? `bg-red-600 p-1 rounded-full`:``} `} >{state.cart.length}</p>
       </button>
 
     <button className={`p-1 ${user?` `:`hidden`} rounded-full border-[2px] border-gray-800`}>
     <IoIosNotifications size={28} className='text-[#ED7D31]'/>
     </button>
</div>
  </nav>
  
  <Modal
   isOpen={isOpen}
   onClose={()=>{setOpen(false)}}
   className={` absolute top-0 right-0  w-full sm:w-[40%]  translate-x-[-0%] translate-y-[-0%]  `}
  > {
    state?.cart.length==0 ?
    <h1 className=' text-[#ED7D31] text-[16px] font-bold'>Please first select a Cast to book !!</h1>
    : <section className='mt-6'>
    <h3 className=' text-black font-semibold'>You have Selected {state.cart.length} Cast's </h3>
    <p className='text-[12px] text-gray-400'>file your name and Phone Number  to book</p>
  <div className='grid grid-cols-1   gap-3'>
   
   {
     state?.cart.map((cart,i)=>{
       return(
       
         <div className='flex  bg-[#E6EEFB] items-center  px-4'>
           <div className=' w-[80px] h-[80px]  '>
             <img src={cart.avatar}  alt='sgs' className=' rounded-full object-cover w-full h-full'/>
           </div>
           <p className='text-[14px] ml-4'>{cart.fullname}</p>

           <button onClick={()=>{dispatch({ type: "REMOVE_FROM_CART",
              payload: cart,})}} className='text-red-600 ml-auto '>
               <AiFillDelete size={28}/>
              </button>
   
         </div>
         
       )
     })
   }
   </div>
   <form className='mt-6'>
   <div>
            <label
              htmlFor="text"
              className="block text-sm font-medium text-gray-700"
            >
              your or company Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                placeholder='yafet film production'
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
   <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              phone number
            </label>
            <div className="mt-1">
              <input
                type="phone"
                name="phone"
                placeholder=' ex:091656****'
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>
          <button
              type="submit"
              className="group relative w-full mt-6 h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ED7D31] hover:bg-orange-800"
            >
              Book !
            </button>
   </form>
  </section>
  }
   
  </Modal>
  <Drawer isdrawerOpen={isdrawerOpen} toggleDrawer={toggleDrawer} />
    </React.Fragment>
 
  )
}

export default Navbar