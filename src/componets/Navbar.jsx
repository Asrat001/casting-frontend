import React, { useEffect, useState } from 'react'
import {BsPersonPlusFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import logo from "../assets/cast.png"
import { useShoppingCart } from '../Context/CartContext'
import Modal from './Modal'
import Drawer from './drawer'
import { AiFillDelete } from 'react-icons/ai'

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
 
      <nav className={` w-full fixed  left-0 top-0  ${scrolled ? `  bg-white`:` bg-white`}  justify-between  z-20 flex    sm:gap-[100px] items-center px-6 py-2  sm:px-8`}>
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
      <h1 className=''><span className=' font-bold'>Energy</span> Casting</h1>
      </div>
    
  
     <ul className=' sm:flex justify-center items-center gap-x-4 hidden '>
       <li>
        <NavLink to='/' className='text-black text-[14px]'>Home</NavLink>
       </li>
       <li>
        <NavLink to='/about' className='text-black text-[14px]'>About</NavLink>
       </li>
       <li>
       <NavLink to={`${user?'':'login'}`} className='text-black text-[14px]'>{user?'':'login'}</NavLink>
       </li>
       <li className={` border-dotted  border-[4px] p-2 border-[#ED7D31]  `}>
        <NavLink to='/how' className='text-black text-[14px]'>How it works</NavLink>
       </li>
        
     </ul>
      <button 
      onClick={()=>{setOpen(true)}}
      className={`p-3 h-16 w-16 rounded-full ${user?` hidden`:``} border-[4px]  border-[#ED7D31]  flex justify-center items-center`}>
      <BsPersonPlusFill className=' text-gray-900 ' size={28}/>
      <p className={` text-gray-900 relative top-[-4px] left-0 ${state.length>0 ? `bg-red-600 p-1 rounded-full`:``} `} >{state.cart.length}</p>
       </button>
 
     <img src={user?.img} alt='profile pic' className={` ${user? 'block':' hidden'} w-16 h-16 rounded-full  border-[3px]  border-[#ED7D31]  object-cover`}/>
 
  </nav>
  
  <Modal
   isOpen={isOpen}
   onClose={()=>{setOpen(false)}}
   className={` absolute top-0 right-0  w-auto sm:w-[40%]  translate-x-[-0%] translate-y-[-0%]  `}
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