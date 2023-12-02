import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../assets/Spinner.svg"
import { server } from '../server';
import { useEffect } from 'react';
const VerifyOTP = () => {
  const [otp, setOTP] = useState('');
  const [user, setUser] = useState();
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your_token', 
    
    // Example: Authorization header with a token
    // Add other headers as needed
  };
  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem('user'));
    setUser(user)
  },[])
  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  
    try {
      setIsloading(true)
      await axios.post(`${server}/api/user/verify`,  {otp },{withCredentials:true} ).then(res=>{
        if(res.status===200){
          toast.success('you  sucussfully verified ',{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          
          })
          setIsloading(false)
          navigate('/profile')
        }
   
      }).catch(error=>{
        const status =error.response.status
        if(status===401){
          toast.warning("your otp is expired ",{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
        setIsloading(false)
      }
      if(status===404){
        toast.warning("user not found ",{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      })
      setIsloading(false)
    }
    if(status===400){
      toast.warning("Invalid OTP",{
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
    setIsloading(false)
  }

    });
     
       // Handle the response as needed
    } catch (error) {
      setIsloading(false); // Handle the error as needed
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" p-6 md:p-20">
      <div>
<p className='text-[16px] font-semibold text-[#ED7D31]'>Hey {user?.fullname} !!</p>
<h3 className=' text-[42px]'>Alomost there </h3>
<p className=' text-[14px] text-[#ED7D31]'> we have sent you an email with verification OTP to your email Account</p>
      </div>
<main className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center flex-col w-full p-5 md:w-1/4'>
<div className=' w-full mt-20'> 
  <p className='text-[12px]'>Vitfay you're Email</p>
<input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={handleOTPChange}
        className="border border-gray-300 px-4 py-2 w-full mb-4 rounded-full"
      />
</div>
      <button
        type="submit"
        className="group relative w-full mt-6 h-[40px] flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-900"
      >
          {isLoading?<img src={Spinner} alt="loding" className='w-10 h-10'/>:'Verify OTP'}
      
      </button>
</main>


    </form>
  );
};

export default VerifyOTP;
