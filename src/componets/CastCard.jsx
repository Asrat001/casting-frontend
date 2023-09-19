import React from 'react'
import Data from '../data'
const CastCard = () => {
  return (
    <div className='grid grid-cols-4 place-content-center justify-items-center gap-4'>
{
    Data.map((data,key)=>{
        return(
            <div key={key} className='w-[300px] h-[400px] bg-transparent  border-[4px] border-green-400 rounded-xl '>
                <img src={data.img} className=' h-1/2  object-cover w-full '/>
                <p className='text-white'>Name:{data.name}</p>
                <p className='text-white'>Catagory:{data.role}</p>

            </div>
        )
    })
}
    </div>
  )
}

export default CastCard