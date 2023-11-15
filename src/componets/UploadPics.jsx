import React from 'react'
import {BsFillCloudUploadFill} from 'react-icons/bs'

const UploadPics = () => {
  return (
    <div className=' w-[150px] mx-auto my-4 h-[150px] flex justify-center items-center p-4 border-[4px] border-orange-400 rounded-full'>
     <button className='flex flex-col justify-center items-center '>
        <BsFillCloudUploadFill className=' text-orange-400 hover:text-slate-900 w-10 h-10'/>
        <p className=' text-slate-900  '>upload your  picture</p>
     </button>
    </div>
  )
}

export default UploadPics