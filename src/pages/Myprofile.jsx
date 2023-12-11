import React, { useEffect, useState } from 'react';
import { Link, useNavigate, } from 'react-router-dom';
import { useQuery } from 'react-query';
import { server } from '../server';
import axios from 'axios';
import Spinner from "../assets/Spinner.svg"

const ProfilePage = () => {
 
 const Navigate=useNavigate()
  
    const user = JSON.parse(sessionStorage.getItem('user'));
    const logout = async ()=>{
   
      try {
       await axios.post(`${server}/api/user/logout`,{withCredentials:true}).then((res)=>{
       
          if(res.status==201){
            sessionStorage.removeItem('user');
            Navigate('/')
          }
       })
      } catch (error) {
        console.log(error)
      }
  }
    
  
const fetchProfileData = async()=>{
  return await axios.get(`${server}/api/user/detail/${user?._id}`,{withCredentials:true})
}

  const { isLoading , data:userData,isError} = useQuery("user-profile",fetchProfileData); 
 
  const info=[userData?.data.userinfo[0].info]
  if(!user){
    return <div className='bg-gray-100 h-screen w-full flex items-center justify-center flex-col'>
   
    <p className=' text-[16px] text-gray-800'>Login first </p>
   </div>;
   }
  if(isLoading){
    return <div className='bg-orange-600 h-screen w-full flex items-center justify-center flex-col'>
            <img src={Spinner} className='w-20 h-20 '/>
            <p className=' text-[16px] text-gray-800'>Loding your profile</p>
           </div>;
  }
  if(isError){
    return <div className='bg-orange-600 h-screen w-full flex items-center justify-center flex-col'>
    
    <p className=' text-[16px] text-gray-800'>Error  loading your profile</p>
   </div>;
  }

  return (
    <div className=" min-h-screen p-4 mt-20">
      <div className=' my-4 flex items-center gap-6'>
      <Link to='/profile' className="bg-orange-500 border-[1px] border-indigo-950 hidden sm:block hover:bg-orange-800 text-white font-bold px-2 py-1 rounded-lg ">Edit Profile</Link>   
      <button 
      onClick={logout}
      className={`p-1 w-fit text-gray-800 border-[1px] border-gray-900  rounded-lg    flex justify-center items-center`}>
       log out
       </button>  
      </div>
      <p className=' text-[13px] font-medium font-PoiretOne'>As soon as you got casted we will call you</p>
      <div className="max-w-3xl  bg-white shadow-md rounded-md p-4">
        <div className="flex items-center mb-4 space-x-2">
          <img
            src={userData?.data.userinfo[0].avatar

            }
            alt="Profile Picture"
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div>
            <h1 className="text-2xl font-bold">{userData?.data.userinfo[0].fullname}</h1>
            <p className="text-gray-600">Actor | Model | Musician</p>
          </div>

       
        </div>
        <div className="mb-6 mt-9 space-y-2">
          <h2 className="text-lg font-bold mb-2">Personal Information</h2>
          <p><span className="font-semibold">Language:</span> {userData?.data.userinfo[0].language}</p>
          <p><span className="font-semibold">Phone:</span> {userData?.data.userinfo[0].phone}</p>

          <p><span className="font-semibold">Age:</span> {userData?.data.userinfo[0].age}</p>
          <p><span className="font-semibold">Skin Tone:</span>{userData?.data.userinfo[0].skintone}</p>
          {
info?.map((info)=>{

return(
<div>
  <p><span className="font-semibold">Natinonality:</span>{info?.nationality}</p>
  <p><span className="font-semibold">Region:</span>{info.region}</p>
  <p><span className="font-semibold">City:</span>{info.city}</p>
  <p><span className="font-semibold">Accadamic:</span>{info.accadamic}</p>
</div>
)
})
          }

        </div>
        <div className="mb-6 mt-9 space-y-2">
          <h2 className="text-lg font-bold mb-2">Professional Information</h2>
          <p><span className="font-semibold">Certificates:</span> Acting, Modeling</p>
          <p><span className="font-semibold">Experience:</span>{userData?.data.userinfo[0].exprience}</p>
          {[userData?.data.userinfo[0].talent].map((info)=>{
        return(
          <div>
            <h1 className='text-lg font-bold mb-2'>Talents</h1>
            <p><span className="font-semibold ml-1">{info}</span></p>p
          </div>
        )
          })
          }
        
        
          
        </div>
  
         </div>
     
    </div>
  );
};

export default ProfilePage;
