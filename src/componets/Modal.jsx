import React from 'react'
import { createPortal } from 'react-dom'
import { AiOutlineLeft } from 'react-icons/ai'

const Modal = ({isOpen ,children,onClose ,className}) => {
    if(!isOpen){
        return null
    }
  return createPortal (
    <div className=' overflow-y-auto'>
     <div className='  fixed top-0 z-[22]  left-0  w-full h-full bg-black/90 overflow-y-auto transition ease-in-out delay-[2s] '>
     <div className={ `bg-white ${className} absolute  z-[40] rounded-l-lg p-10 overflow-y-auto   animate-slideRight   `}>
      <button onClick={onClose} className=' absolute top-3  left-3 p-2 bg-orange-600 rounded-lg'><AiOutlineLeft/></button>  
       {children}
      </div>   
   
    </div>
     </div>
  ,
    document.getElementById("modal")
    
  )
}

export default Modal