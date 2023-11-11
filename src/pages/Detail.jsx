import { useEffect } from 'react';
import  {useLocation}  from 'react-router-dom';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import {BsFillTelephoneFill} from 'react-icons/bs'


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Detail = () => {
  return (
    <main className='p-4 mt-[80px] sm:mt-[100px] space-y-2'>
      <p className=' text-[28px]  text-[#ED7D31] font-bold'>User Detail</p>
  <div className='  min-h-screen  border-[2px] border-gray-400 w-fit  grid grid-cols-1 sm:grid-cols-2 sm:gap-x-4  sm:p-[10px] '>
        <ScrollToTop/> 
          <div>
          <div className=' border-[#ED7D31] border-[2px]  w-full  h-fit   '>
              <img src='https://res.cloudinary.com/diogyja1g/image/upload/v1693222355/9_v0if8x.jpg' className='h-[500px] w-full object-cover' alt=''/>
            </div>

          </div>
            <div className='px-3'>
       
                <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>Name:</span>Asrat Adane</p>
                <p className='balance text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>about me:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.  sit amet consectetur adipisicing elit.  sit amet consectetur adipisicing elit.  sit amet consectetur adipisicing elit. sit amet consectetur adipisicing elit.  sit amet consectetur adipisicing elit. Corrupti, quas. consectetur adipisicing elit. Corrupti, quas. consectetur adipisicing elit. Corrupti, quas.</p>
                <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>age:</span>23</p>
                <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>exprinace:</span>sxnibiuwcbic ,whcyvbew,buiwe</p>
                <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>talent:</span>reading , codding , slepping , eating</p>
                <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>Language:</span>somali , oromuffa , English , eating</p>
                <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>Nationality:</span>Ethiopian</p>
                <p className=' text-gray-700 font-semibold'><span className=' text-[#ED7D31] text-[20px]'>Address:</span>addis abeba , 4killo </p>
                <div className=' flex  gap-x-4 items-center my-6 '>
             <button className=' text-gray-700 border-[3px]  border-gray-700 p-1.5'>book me</button> 
             <a className='border-[3px] text-gray-700  border-[#ED7D31] p-1.5 flex items-center gap-x-2'><BsFillTelephoneFill/> call me</a>
            </div>
        
            </div>
    </div>
    </main>
  
  )
}

export default Detail