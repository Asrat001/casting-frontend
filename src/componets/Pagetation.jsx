import React from 'react'
import { useShoppingCart } from '../Context/CartContext'



const Pagetation = () => {
  const {CastData} = useShoppingCart()
  const pages = []
  
  const totalPage=Math.round(parseInt(CastData?.data.total) /6 )
   for(let i=1;i<=totalPage;i++){
    pages.push(i)
   }


  
  return (
    <div className=' flex justify-center items-center mb-24 '>
    <div className='w-fit  flex items-center justify-center '>
      <button className='w-12 h-12 flex justify-center items-center p-2 border-[2px] ml-2 border-gray-400 bg-[#ED7D31] text-gray-600 rounded-full '>Prev</button>
{pages.map((page,key)=>{
    return(
    
        <button key={key} className='w-8 h-8  border-[1px] ml-2 border-[#3E8ED1] text-gray-300 rounded-full f'>
      {page}
        </button>
   

    )
})}
<button className='w-12 h-12 flex justify-center items-center p-2 border-[2px] ml-2 border-gray-400 bg-[#ED7D31] text-gray-600 rounded-full '>Next</button>
    </div>
    </div>
  )
}

export default Pagetation