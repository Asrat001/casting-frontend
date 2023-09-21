import React from 'react'
import Data from '../data'
import { Link } from 'react-router-dom'
const CastCard = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 place-content-center justify-items-center gap-4'>
{
    Data.map((data,key)=>{
        return(
            <div key={key} className='w-[300px] h-[400px] bg-[#0f1623]/60  border-[4px] border-green-400 rounded-xl '>
                <img src={data.img} className=' h-1/2  object-cover w-full rounded-t-xl '/>
                <div className='px-2 py-2'>
                <p className=' text-green-400'>{data.role}</p>
                <p className=' text-gray-400 px-1'>{data.disc}</p>
                </div>
                <div className=' flex items-center justify-between px-2'>
                <Link to='/detail' className='py-1 px-1.5 w-[80px] flex justify-center items-center border-gray-400 border rounded-full text-green-400'>Detail</Link>
                <button className='py-1.5 px-1.5  border-gray-400 border rounded-full text-white'>selecte talent</button>
                </div>

            </div>
        )
    })
}
    </div>
  )
}

export default CastCard