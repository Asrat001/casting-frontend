import React from 'react'
const pages = [
    1,2,3,4,5
]
const Pagetation = () => {
  return (
    <div className=' flex justify-center items-center mb-24 '>
    <div className='w-fit  flex items-center justify-center '>
      <button className='w-12 h-12 flex justify-center items-center p-2 border-[2px] ml-2 border-gray-400 bg-green-300 text-gray-600 rounded-full '>Prev</button>
{pages.map((page,key)=>{
    return(
    
        <button className='w-8 h-8  border-[1px] ml-2 border-green-400 text-gray-300 rounded-full f'>
      {page}
        </button>
   

    )
})}
<button className='w-12 h-12 flex justify-center items-center p-2 border-[2px] ml-2 border-gray-400 bg-green-300 text-gray-600 rounded-full '>Next</button>
    </div>
    </div>
  )
}

export default Pagetation