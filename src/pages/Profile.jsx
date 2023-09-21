import React, { useState } from 'react'
import UploadPics from '../componets/UploadPics'
import {AiOutlineCloseCircle} from "react-icons/ai"
 
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
    "🏞️ Travel",
    "🎯 Sports",
    "🎬 Movies",
    "📺 TV Shows",
    "📷 Photography",
    "💻 Technology",
    "🧘‍♀️ Yoga",
    "🌱 Sustainability",
    "📝 Writing",
  ];


const Profile = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [Language, setLanguage] = useState("");
    const [password, setPassword] = useState("");
    const [interests, setInterests] = useState(
        []
      );
      const removeTag=(Indextoremove)=>{
      setInterests(interests.filter((_,index)=>index!==Indextoremove))

    }
   console.log(Language.split(","))
  return (
    <main className=' min-h-screen flex justify-center items-center p-2 sm:p-12'>
        
        <div className=' bg-white sm:w-[80%] h-auto p-6  rounded-lg'>
        <p>setup your profile</p>
         <UploadPics/>
         <form className="mt-6">
           <main className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
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
                phone number
              </label>
              <div className="mt-1">
                <input
                  type="phone"
                  name="phone"
                  placeholder=' ex:091656****'
                  required
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder='place sparet them by comaeg: Amharic,Engilsh,Oromuffa'
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Upload 4 picture  of your self (make sure u look good)
              </label>
              <div className="mt-1 flex  space-x-3 items-center" >
                <input
                  type="file"
                  name="photo"
                  accept='.jpg, jpeg, .png'
                  multiple={true}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block gap-x-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
               <button className='group relative  h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-900'>Upload</button>
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
                <select className='       className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"'>
                <option>
                    Black
                  </option>
                  <option>

                    Brown
                  </option>
                  <option>
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
                Address
              </label>
             
                <div className="mt-1">
                <input
                  type='text'
                  name="language"
                  autoComplete="name"
                  placeholder=''
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
                City
              </label>
             
                <div className="mt-1">
                <input
                  
                  name="language"
                  autoComplete="name"
                  placeholder='Addis Abeba,Dilla,Bahir dar'
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
                Cv/Educational Certificate
              </label>
             
                <div className="mt-1">
                <input
                  type='file'
                  name="file"
                  autoComplete="name"
                  placeholder='place sparet them by comaeg: Amharic,Engilsh,Oromuffa'
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
                Expriance
              </label>
             
                <div className="mt-1">
                <input
                  type='text'
                  name="text"
                  autoComplete="name"
                  placeholder='ex: Music video, Movie , promrotion'
                  required
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            
            </div>
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
            </main> 
          
            <button
                type="submit"
                className="group relative w-full mt-6 h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-900"
              >
                Submit
              </button>
          </form>
          <div>
          
            </div>
        </div>

    </main>
  )
}

export default Profile