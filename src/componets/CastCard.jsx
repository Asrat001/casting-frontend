
import { BsFillCameraReelsFill, BsFillEyeFill, BsFillTelephoneFill } from 'react-icons/bs'
import { useShoppingCart } from '../Context/CartContext'
import Data from '../data'
import Modal from './Modal'
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CastCard = () => {
    const {state,dispatch,data} = useShoppingCart()
    const [isOpen , setOpen]=useState(false)
    const [Detail , setDetail]=useState([])
 const handleDitail =({data})=>{
  
  setDetail([data])
  setOpen(true)
 }
console.log(data)

 const hadleAddtoCast =(data)=>{
dispatch({
                type: "ADD_TO_CART",
                payload: data,
              })
       
            
 }

  



  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 place-content-center justify-items-center gap-5'>
     
{
    data?.data.users.map((data,i)=>{
      
        
        return(
            <div key={i} className='w-fit h-fit bg-white    shadow-lg shadow-gray-300    '>
                <img src={data.avatar} loading='lazy' className=' h-[240px]  object-cover w-full   '/>
                <div className='px-2 py-2'>
                <p className=' text-gray-800'>{data.fullname}</p>
                <p className=' text-gray-600 text-[14px] px-1 '>{data.about}</p>
                </div>
                <div className=' flex items-center gap-x-4 px-2 p-2'>
                <button   onClick={()=>handleDitail({data})} className='py-1 px-1.5 w-auto flex  gap-3 justify-center bg-[#E6EEFB] items-center border-gray-400 border  text-[#ED7D31]'>
                  Detail
                  <BsFillEyeFill/>
                </button>
                <button 
               onClick={() => { hadleAddtoCast(data)  }} className={`py-1.5 px-1.5 flex items-center gap-3 bg-[#E6EEFB]  border-gray-400 border  ${state.cart.some(item => item._id === data._id) ? 'bg-[#ED7D31]' : ''}   text-gray-700`}>
                   {state.cart.some(item => item._id === data._id) ? 'Already in Cart' : 'Book'}
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
          <h1 className=' text-black  text-[26px]'>{user.role}</h1>
          <img src={user.avatar} className='h-[500px] w-full object-cover' alt='username'/>
<      div className='px-3'>
       
       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>Name: </span>{user.fullname}</p>
       <p className='balance text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>about me:</span> {user.about}</p>
       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>age: </span>{user.age}</p>
       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>exprinace:</span>{user?.expriance}</p>

       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>talent:</span>{user.talent}</p>
       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>Language: </span>{user.language.join(' , ')}</p>
       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>Nationality:</span>{user.info.nationality}</p>
       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>Region: </span>{user.info.region}</p>

       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>Acadamic: </span>{user.info.accadamic}</p>
       <p className=' text-gray-700 text-[13px] '><span className=' text-[#ED7D31] text-[20px]'>Address: </span>{user.info.city}</p>

       <div className=' flex  gap-x-4 items-center my-6 '>
    <button  
     onClick={() => { dispatch({
      type: "ADD_TO_CART",
      payload: user,
    }), handleAddToCarttostify(); }}  className={ `text-gray-700 border-[3px]  border-gray-700 p-1.5 ${state.cart.some(item => item.id === user.id) ? 'bg-[#ED7D31]' : ''} `}>{state.cart.some(item => item.id === user.id) ? 'Already in Cart' : 'Book'}</button> 
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