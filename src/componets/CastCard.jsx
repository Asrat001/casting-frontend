
import Data from '../data'
import { Link } from 'react-router-dom'

const CastCard = () => {

 
  return (
    <div className='grid grid-cols-1 sm:grid-cols-4 place-content-center justify-items-center gap-5'>
     
{
    Data.map((data,i)=>{
        return(
            <div key={i} className='w-fit h-fit   border-[4px] border-green-400/80 rounded-md  '>
                <img src={data.img} loading='lazy' className=' h-[240px]  object-cover w-full rounded-t-md  '/>
                <div className='px-2 py-2'>
                <p className=' text-green-400'>{data.role}</p>
                <p className=' text-gray-400 px-1'>{data.disc}</p>
                </div>
                <div className=' flex items-center gap-x-4 px-2 p-2'>
                <Link to='/detail' className='py-1 px-1.5 w-[80px] flex justify-center items-center border-gray-400 border  text-green-400'>Detail</Link>
                <button className='py-1.5 px-1.5  border-gray-400 border  text-white'>book me</button>
                </div>

            </div>
        )
    })
}
    </div>
  )
}

export default CastCard