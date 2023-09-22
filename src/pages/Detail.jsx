import React from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import {BsFillTelephoneFill} from 'react-icons/bs'

const Detail = () => {
  return (
    <div className=' min-h-fit grid grid-cols-1 sm:grid-cols-2 gap-x-4 px-[20px] sm:px-[100px] mt-[60px]'>
        
        
            <div className=' bg-[#0f1623] p-4 h-fit rounded-lg  '>
              <img src='https://res.cloudinary.com/diogyja1g/image/upload/v1693222355/9_v0if8x.jpg' className='h-[400px] w-full object-cover' alt=''/>
              <p className=' text-gray-400  italic'>see cast's picture from diffrent angel</p>
              <div className='  flex  gap-x-6 mt-2 items-center '>
                <button className='p-2 border-[3px]  border-white/75'><AiOutlineArrowLeft className=' text-green-400 w-6 h-6'/></button>
                <button className='p-2 border-[3px]  border-white/75'><AiOutlineArrowRight className=' text-green-400 w-6 h-6'/></button>
              </div>
            </div>
            <div className='px-3'>
       
                <p className=' text-gray-400 font-semibold'><span className=' text-green-500 text-[20px]'>Name:</span>Asrat Adane</p>
                <p className='balance text-gray-400 font-semibold'><span className=' text-green-500 text-[20px]'>about me:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.  sit amet consectetur adipisicing elit.  sit amet consectetur adipisicing elit.  sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit.  sit amet consectetur adipisicing elit. Corrupti, quas. consectetur adipisicing elit. Corrupti, quas. consectetur adipisicing elit. Corrupti, quas.</p>
                <p className=' text-gray-400 font-semibold'><span className=' text-green-500 text-[20px]'>age:</span>23</p>
                <p className=' text-gray-400 font-semibold'><span className=' text-green-500 text-[20px]'>exprinace:</span>sxnibiuwcbic ,whcyvbew,buiwe</p>
                <p className=' text-gray-400 font-semibold'><span className=' text-green-500 text-[20px]'>talent:</span>reading , codding , slepping , eating</p>
                <p className=' text-gray-400 font-semibold'><span className=' text-green-500 text-[20px]'>Language:</span>somali , oromuffa , English , eating</p>
                <p className=' text-gray-400 font-semibold'><span className=' text-green-500 text-[20px]'>Nationality:</span>Ethiopian</p>
                <p className=' text-gray-400 font-semibold'><span className=' text-green-500 text-[20px]'>Address:</span>addis abeba , 4killo </p>
                <div className=' flex  gap-x-4 items-center mt-6'>
             <button className=' text-gray-300 border-[3px]  border-gray-400 p-1.5'>book me</button> 
             <a className='border-[3px] text-gray-400  border-green-400 p-1.5 flex items-center gap-x-2'><BsFillTelephoneFill/> call us</a>
            </div>
        
            </div>
         

    </div>
  )
}

export default Detail