import React, { useRef } from 'react'
import { useShoppingCart } from '../Context/CartContext'



const Pagetation = ({Data,HandelPage,ref}) => {
  const buttonRef = useRef(null);
  const pages = []
  
  const totalPage=Math.ceil(parseInt(Data?.data?.total) /8 )
   for(let i=1;i<=totalPage;i++){
    pages.push(i)
   }
const  OnNextClick =(e)=>{
  if(Data?.data.page==totalPage){
    HandelPage(Data?.data.page)
  }else{
    
    HandelPage(Data?.data.page+1)
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
   
  
  }

}
const OnPrevClick=(e)=>{
  e.preventDefault();
  if(Data?.data.page==1){
    HandelPage(Data?.data.page)
  }else{
    HandelPage(Data?.data.page-1)
  }
 
}

  
  return (
    <div className={`${Data?.data.total <=8?'hidden':'flex'}  justify-center items-center mb-24 `}>
    <div className='w-fit  flex items-center justify-center '>
      <button onClick={OnPrevClick} className='w-12 h-12 flex justify-center items-center p-2 border-[2px] ml-2 border-gray-400 bg-[#ED7D31] text-gray-600 rounded-full '>Prev</button>
{pages.map((page,key)=>{
    return(
    
        <button key={key} className={`${Data?.data.page==page?` bg-black text-white`:``} w-8 h-8  border-[1px] ml-2 border-[#3E8ED1] text-gray-300 rounded-full `}>
      {page}
        </button>
   

    )
})}
<button onClick={OnNextClick} ref={buttonRef} className='w-12 h-12 flex justify-center items-center p-2 border-[2px] ml-2 border-gray-400 bg-[#ED7D31] text-gray-600 rounded-full '>Next</button>
    </div>
    </div>
  )
}

export default Pagetation