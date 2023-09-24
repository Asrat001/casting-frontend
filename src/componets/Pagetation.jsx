import React from 'react'
const pages = [
    1,2,3,,5,6,7,8
]
const Pagetation = () => {
  return (
    <div className=' flex justify-center items-center mb-24 '>
    <div className='w-fit py-3 px-2 h-fit border-[2px]  border-gray-400 rounded-xl'>
{pages.map((page,key)=>{
    return(
    
        <button className='w-8 h-8  border-[1px] ml-2 border-green-400 text-gray-300'>
      {page}
        </button>
   

    )
})}
    </div>
    </div>
  )
}

export default Pagetation