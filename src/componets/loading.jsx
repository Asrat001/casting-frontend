import React, { useEffect, useState } from 'react'
import loadingL from '../assets/loging.svg'

function Loading() {

  
  return (
    <div className={` w-screen flex  flex-col justify-center items-center  h-screen bg-white`}>
    <img src={loadingL} className='w-16 h-16 '/>
    <h className=' text-gray-900 font-PoiretOne text-[30px]'>Build your Dream Here</h>
    <p className='text-[14px] text-gray-800'>Energy Film Production</p>
    </div>
  )
}

export default Loading