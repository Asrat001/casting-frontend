import React from 'react'
import Data from '../data'
const CastCard = () => {
  return (
    <div className='grid grid-cols-4 place-content-center justify-items-center gap-4'>
{
    Data.map((key , data)=>{
        return(
            <div key={key} className='w-[300px] h-[400px] bg-transparent  border-[4px] border-green-400 rounded-xl '>

            </div>
        )
    })
}
    </div>
  )
}

export default CastCard