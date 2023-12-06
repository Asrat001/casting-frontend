
import { BsFillCameraReelsFill, BsFillEyeFill, BsFillTelephoneFill } from 'react-icons/bs'
import { useShoppingCart } from '../Context/CartContext'
import Data from '../data'
import Modal from './Modal'
import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loding from '../assets/loging.svg'


const CastCard = ({Data,lodingCast,error}) => {
  console.log(Data)
    const {state,dispatch} = useShoppingCart()
    const [isOpen , setOpen]=useState(false)
    const [showCard, setShowCard] = useState(null);
    const [Detail , setDetail]=useState([])
 const handleDitail =({data})=>{
  
  setDetail([data])
  setOpen(true)
 }
 const user = JSON.parse(sessionStorage.getItem('user'));

 const hadleAddtoCast =(data)=>{
dispatch({
                type: "ADD_TO_CART",
                payload: data,
              })
       
            
 }
 if(lodingCast)
  {
    return(
      <div className='grid place-items-center'>
        <img src={loding} alt="loading" className=' w-24 h-24' />
      </div>
    )

  }
  if(error)
  {
    return(
      <div className='grid place-items-center'>
       <p>erroe loding data</p>
      </div>
    )

  }
  if(Data?.data.total==0  )
  
  
  {
    return(
      <div className='grid place-items-center'>
       <p>No Data matching your search</p>
      </div>
    )

  }




  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 place-content-center justify-items-center gap-5'>
     
{
    Data?.data?.users.map((data,i)=>{
      
        
        return(
            <div key={i}  
             onMouseEnter={() => setShowCard(i)}
             onMouseLeave={() => setShowCard(null)}  
             style={{ backgroundImage: `url(${data.avatar})` }}
             className={`w-[300px] h-[400px]  bg-white flex flex-col justify-end bg-cover bg-no-repeat  bg-center  rounded-lg   shadow-lg shadow-gray-300   ` }>
     <div className={`${showCard==i?' bg-gray-800/50 rounded-b-lg':''}`}>
     <div className='px-2 py-2   '>
                <p className=' text-white font-bold'>{data.fullname} | <span className=' text-orange-600 text-[12px] font-extrabold '>{data.expriance}</span></p>
                <p className=' text-white text-[14px] px-1 text-ellipsis '>{data?.about?.length>50?`${data.about.slice(0, 50)}...`:data.about }</p>
                </div>
          {showCard==i &&(
           <div>
             
                <div className=' flex items-center gap-x-4  p-2'>
                <button   onClick={()=>handleDitail({data})} className='py-1 px-1.5 w-auto flex text-[16px]  gap-3 justify-center rounded-full bg-[#ED7D31] items-center shadow-md shadow-gray-300   text-white'>
                  Detail
                  <BsFillEyeFill/>
                </button>
                <button 
                disabled={user?.isAdmin==false}
               onClick={() => { hadleAddtoCast(data)  }} className={`py-1.5 px-1.5 flex items-center gap-3 bg-white  rounded-full text-[15px] border  ${state.cart.some(item => item._id === data._id) ? 'bg-[#ED7D31]' : ''}   text-gray-700`}>
                   {state.cart.some(item => item._id === data._id) ? 'Booked' : 'Book'}
                  <BsFillCameraReelsFill />
                  </button>
                </div>
            </div>
          )

          }
      </div>

            </div>
        )
    })
}
<Modal
  isOpen={isOpen}
  onClose={()=>{setOpen(false)}}
  className={` fixed top-0  right-0 w-full  md:w-[70%]   translate-x-[-0%] translate-y-[-0%]  `}
>
  <section className=' mt-4'>

  {
    Detail?.map((user,i)=>{
      
      return(
        <div key={i}>

          <h1 className=' text-black font-semibold text-[26px]'>{user.role}</h1>
          <img src={user?.avatar
} className='h-[500px] w-full object-cover' alt='username'/>
<div className='px-3'>

       
       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>Name: </span>{user.fullname}</p>
       <p className='balance text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>about me:</span> {user.about}</p>
       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>age: </span>{user.age}</p>
       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>exprinace:</span>{user?.expriance}</p>

       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>talent:</span>{user.talent}</p>
       <p className=' text-gray-700 text-[13px]'><span className=' text-[#ED7D31] text-[20px]'>Language: </span>{user.language}</p>
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