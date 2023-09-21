import React from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"

const Detail = () => {
  return (
    <div className=' min-h-screen grid grid-cols-1 sm:grid-cols-2 gap-3 px-[100px] mt-[40px]'>
        <div>
        
            <div className='w-[400px] h-[400px] bg-slate-300'>
            <div className=' flex justify-between items-center px-10 relative top-0 left-0'>
                <button className='p-2 rounded-full border-[4px]  border-green-400'><AiOutlineArrowLeft/></button>
                <button className='p-2 rounded-full border-[4px]  border-green-400'> <AiOutlineArrowRight/></button>
             </div>
            </div>
            
        </div>

    </div>
  )
}

export default Detail