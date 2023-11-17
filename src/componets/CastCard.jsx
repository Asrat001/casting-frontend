
import { BsFillCameraReelsFill, BsFillEyeFill, BsFillTelephoneFill } from 'react-icons/bs'
import { useShoppingCart } from '../Context/CartContext'
import Data from '../data'
import Modal from './Modal'
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CastCard = () => {
    const {openCart,dispatch} = useShoppingCart()
    const [isOpen , setOpen]=useState(false)
    const [Detail , setDetail]=useState([])
 const handleDitail =({data})=>{
  console.log(data)
  setDetail([data])
  setOpen(true)
 }

 const handleAddToCarttostify = () => {
  // Add product to cart logic here


  // Show toast notification
  toast.success('Product added to cart!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};


  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 place-content-center justify-items-center gap-5'>
     
{
    Data.map((data,i)=>{
        return(
            <div key={i} className='w-fit h-fit bg-white    shadow-lg shadow-gray-300    '>
                <img src={data.img} loading='lazy' className=' h-[240px]  object-cover w-full   '/>
                <div className='px-2 py-2'>
                <p className=' text-gray-800'>{data.role}</p>
                <p className=' text-gray-600 text-[14px] px-1 '>{data.disc}</p>
                </div>
                <div className=' flex items-center gap-x-4 px-2 p-2'>
                <button  onClick={()=>handleDitail({data})} className='py-1 px-1.5 w-auto flex  gap-3 justify-center bg-[#E6EEFB] items-center border-gray-400 border  text-[#ED7D31]'>
                  Detail
                  <BsFillEyeFill/>
                </button>
                <button 
               onClick={() => { dispatch({
                type: "ADD_TO_CART",
                payload: data,
              }), handleAddToCarttostify(); }} className='py-1.5 px-1.5 flex items-center gap-3 bg-[#E6EEFB]  border-gray-400 border hover:bg-[#ED7D31]  text-gray-700'>
                  <p>Book</p>
                  <BsFillCameraReelsFill />
                  </button>
                </div>

            </div>
        )
    })
}
<Modal
  isOpen={isOpen}
  onClose={()=>{setOpen(false)}}
  className={` fixed top-0  right-0  w-[70%]   translate-x-[-0%] translate-y-[-0%]  `}
>
  <section className=' mt-4'>

  {
    Detail?.map((user,i)=>{
      return(
        <div>
          <h1 className=' text-black font-semibold text-[26px]'>{user.role}</h1>
          <img src={user.img} className='h-[500px] w-full object-cover' alt='username'/>
<      div className='px-3'>
       
       <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>Name:</span>{user.role}</p>
       <p className='balance text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>about me:</span> {user.disc}</p>
       <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>age:</span>23</p>
       <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>exprinace:</span>sxnibiuwcbic ,whcyvbew,buiwe</p>
       <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>talent:</span>reading , codding , slepping , eating</p>
       <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>Language:</span>somali , oromuffa , English , eating</p>
       <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>Nationality:</span>Ethiopian</p>
       <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>Address:</span>addis abeba , 4killo </p>
       <div className=' flex  gap-x-4 items-center my-6 '>
    <button  
     onClick={() => { dispatch({
      type: "ADD_TO_CART",
      payload: user,
    }), handleAddToCarttostify(); }}  className=' text-gray-700 border-[3px]  border-gray-700 p-1.5'>book me</button> 
    <a className='border-[3px] text-gray-700  border-[#ED7D31] p-1.5 flex items-center gap-x-2'><BsFillTelephoneFill/> call me</a>
   </div>
   </div>
        </div>
      )
    })
  }
  </section>

</Modal>
    </div>
  )
}

export default CastCard