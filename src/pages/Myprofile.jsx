import React, { useEffect, useState } from 'react';
import { Link, } from 'react-router-dom';
import { useQuery } from 'react-query';
import { server } from '../server';
import axios from 'axios';
import Spinner from "../assets/Spinner.svg"

const ProfilePage = () => {
 
 
  
    const user = JSON.parse(sessionStorage.getItem('user'));
   
    
  
const fetchProfileData = async()=>{
  return await axios.get(`${server}/api/user/detail/${user?._id}`,{withCredentials:true})
}

  const { isLoading , data:userData,isError} = useQuery("user-profile",fetchProfileData); 
 
  const info=[userData?.data.userinfo[0].info]

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
    <div className="bg-gray-100 min-h-screen p-4 mt-20">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-4">
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

        <Link to='/profile' className="bg-orange-500 hidden sm:block hover:bg-orange-800 text-white font-bold px-2 py-1 rounded-full mt-5">Edit Profile</Link>     
        </div>
        <div className="mb-6 mt-9 space-y-2">
          <h2 className="text-lg font-bold mb-2">Personal Information</h2>
          <p><span className="font-semibold">Language:</span> {userData?.data.userinfo[0].language}</p>
          <p><span className="font-semibold">Phone:</span> {userData?.data.userinfo[0].phone}</p>

          <p><span className="font-semibold">Age:</span> {userData?.data.userinfo[0].age}</p>
          <p><span className="font-semibold">Skin Tone:</span>{userData?.data.userinfo[0].skintone}</p>
          {
info.map((info)=>{

return(
<div>
  <p><span className="font-semibold">Natinonality:</span>{info.nationality}</p>
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
