import React, { useEffect, useState } from 'react'
import UploadPics from '../componets/UploadPics'
import {AiOutlineCloseCircle} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { server } from '../server';
import { toast } from 'react-toastify';
 
const Talents = [
    "🎨 Art",
    "📚 Books",
    "💼 Business",
    "🚗 Cars",
    "📖 Comics",
    "🌍 Culture",
    "✏️ Design",
    "🍽️ Food",
    "🎮 Gaming",
    "🎶 Music",
    "🏋️ Fitness",
    "🏞️ Swimming",
    "🎯 Sports",
    "🎬 Movies",
    "📺 TV Shows",
    "📷 Photography",
    "💻 Technology",
    "🧘‍♀️ Yoga",
    "🌱 Sustainability",
    "📝 Writing",
  ];

  const image =[
    "https://res.cloudinary.com/diogyja1g/image/upload/v1695589767/image2_fu1qup.jpg",
    "https://res.cloudinary.com/diogyja1g/image/upload/v1695589768/86_sffdlz.jpg",
    "https://res.cloudinary.com/diogyja1g/image/upload/v1695590103/image1_hzy1af.jpg",
    "https://res.cloudinary.com/diogyja1g/image/upload/v1695589769/image3_fezfd6.jpg"
    ]
const Profile = () => {
    const [rand, setRand] = useState(0);
    const [about, setAbout] = useState("");
    const [Language, setLanguage] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState();
    const [sex, setSex] = useState('');
    const [Education, setEducation] = useState('');
    const [link, setLink] = useState("");
    const [nationality, setNationality] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [skin, setSkin] = useState("");
    const [exprience, setExprience] = useState("");
    const [interests, setInterests] = useState(
        []
      );
      const navigate = useNavigate()
      const removeTag=(Indextoremove)=>{
      setInterests(interests.filter((_,index)=>index!==Indextoremove))

    }
    const ProfileData={
      about:about,
      Language:Language.split(","),
      phone:phone,
      age:age,
      info:{
        region:address,
        nationality:nationality,
        city:city,
        accadamic:Education
      },
      link:[link.split(",")],
      exprience:exprience.split(","),
      gender:sex,
      avatar:JSON.parse(sessionStorage.getItem('img')),
      talent:interests,
      skintone:skin
    }


    const handelSubmit= async (e)=>{
      e.preventDefault();
     
      try {
        
         await axios.put(`${server}/api/user/profile`, ProfileData,{withCredentials:true},{
          headers: {
            'Content-Type': 'application/json',
            // Add other headers if needed
            // 'Authorization': 'Bearer token',
          },
        }).then(response=>{
          console.log(response.status)
          if(response.status===200){
            toast.success('profile set up sucssfully',{
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            
            })
            navigate('/myprofile');
          }
        }).catch(error=>{
          
           const status=error.response.status
            if(status===400){
              <div className="p-6"> 
     {
           toast.error('User already exists',{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          
          })
     }
              </div>
         
            }
        });
      
    

        
      }catch(e){

      }
    }
 
    useEffect(() => {
   
      let a = Math.floor(Math.random() * image.length);
      setRand(a)
  }, []);
   
  return (
    <div className=" min-h-screen grid grid-cols-1 sm:grid-cols-2 ">
    <div className="w-full h-full ">
      <div className="bg-white h-full py-8 px-4 shadow  sm:px-10">
      <div className="">
      <h2 className="mt-6 text-3xl font-extrabold text-black">
        Set up Your Profile
      </h2>
      <p className='text-black text-[12px]'>you are one step closer to you're dream Job</p>
      </div>
     
        
         <form className="mt-6" onSubmit={handelSubmit}>
         <UploadPics/>
           <main className='grid grid-cols-1  sm:grid-cols-2 gap-4 '>
           <div>
              
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                About your self
              </label>
             
                <div className="mt-1">
                <textarea
                  maxLength={250}
                  name="language"
                  autoComplete="name"
                  placeholder="i'm pacienate actor and film maker...."
                  required
                  onChange={(e) => setAbout(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

            </div>
         <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                phone number
              </label>
              <div className="mt-1">
                <input
                  type="phone"
                  name="phone"
                  placeholder=' ex:091656****'
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                language
              </label>
             
                <div className="mt-1">
                <input
                  
                  name="language"
                  autoComplete="name"
                  placeholder='sparate by , eg: Amharic,Englishe'
                  required
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                age
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="text"
                  autoComplete="name"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  placeholder='male or female'
                  autoComplete="name"
                  required
                  value={sex}
                  onChange={(e) => setSex(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Education
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  placeholder='Yared School of Art'
                  autoComplete="name"
                  required
                  value={sex}
                  onChange={(e) => setEducation(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
               Your tik tok or youtube  video link
              </label>
              <div className="mt-1 " >
                <input
                placeholder='https://tiktok.com/me or httts://youtube.com/me'
                  type="text"
                  name="photo"
                  required
                  onChange={(e) => setLink(e.target.value)}
                  className="appearance-none block gap-x-4 px-3 w-full py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
      
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Skin ton
              </label>
              <div className="mt-1">
                <select onChange={(e)=>setSkin(e.target.value)} className='className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"'>
                <option value='black'>
                    Black
                  </option>
                  <option value='brown'>

                    Brown
                  </option>
                  <option value='white'>
                    White
                  </option>
                </select>             
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Nationality
              </label>
             
                <div className="mt-1">
                <input
                  type='text'
                  name="language"
                  autoComplete="name"
                  placeholder=''
                  required
                  onChange={(e) => setNationality(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Region
              </label>
             
                <div className="mt-1">
                <input
                  type='text'
                  name="language"
                  autoComplete="name"
                  placeholder=''
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
             
                <div className="mt-1">
                <input
                  
                  name="language"
                  autoComplete="name"
                  placeholder='Addis Abeba,Dilla,Bahir dar'
                  required
                  onChange={(e) => setCity(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Cv/Educational Certificate
              </label>
             
                <div className="mt-1">
                <input
                  type='file'
                  name="file"
                  autoComplete="name"
                  placeholder='place sparet them by comaeg: Amharic,Engilsh,Oromuffa'
                  required
                  onChange={(e) => (e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Expriance
              </label>
             
                <div className="mt-1">
                <input
                  type='text'
                  name="text"
                  autoComplete="name"
                  placeholder='ex: Music video, Movie , promrotion'
                  required
                  onChange={(e) => setExprience(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            
            </div>
          
            </main> 
            <div className=''>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                talents
              </label>
              <div className=" mt-1 relative appearance-none  w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm   focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <ul className='mt-1  '>
            {
                interests.map((tag,index)=>{
                    return(
                        <li key={index} className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-2'>
<span>{tag}</span>
<button onClick={()=>removeTag(index)}
>
<AiOutlineCloseCircle className='ml-4 w-6 h-6' />
</button>


                        </li>
                    )
                })
                   
                
            }
            </ul>
              
              </div>
              <div className="mt-4 h-auto overflow-y-auto  p-2 border-[2px] border-gray-400 rounded-lg">
                      <div className="flex flex-wrap gap-2">
                        {Talents.map((interest, index) => (
                          <button
                            key={index}
                            type="button"
                           
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-2"
                            onClick={() =>
                              setInterests(
                                
                                [...interests,interest]
                              )
                            }
                          >
                            {interest}
                           
                          </button>
                        ))}
                      </div>
                    </div>
            </div>
            <button
                type="submit"
                className="group relative w-full mt-6 h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-900"
              >
                Submit
              </button>
          </form>
         
        
      </div>
    </div>
    <div className=" hidden md:block bg-gradient-to-tr  from-[#243046] to-[#ED7D31]">
      <img src={image[rand]}  alt="loginimage" className=" w-full h-full object-cover mix-blend-overlay "/>
    </div>
  </div>
  )
}

export default Profile