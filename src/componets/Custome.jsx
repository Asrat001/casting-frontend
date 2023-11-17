import React, { useState } from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
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


const Custome = () => {
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
  return (
    <main className=' min-h-screen p-6 flex justify-center items-center'>
     <div className=' bg-white  sm:w-[80%] h-auto p-6 shadow-lg shadow-gray-500  '>
        <p className='  text-black text-[28px] font-bold'>Place your Oredr</p>
         <form className="mt-6">
        <div className=' sm:w-1/4 bg-[#F0F3F4] p-6'>
        <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                your Name
              </label>
              <div className="mt-1">
                <input
                  type="phone"
                  name="phone"
                  placeholder=' ex:091656****'
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 bg-inherit py-2 border border-gray-400 rounded-md shadow-sm  focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                your Phone
              </label>
              <div className="mt-1">
                <input
                  type="phone"
                  name="phone"
                  placeholder=' ex:091656****'
                  required
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 bg-inherit py-2 border border-gray-400 rounded-md shadow-sm  focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
        </div>
        <p className=' text-[20px] font-Comfortaa text-black font-extrabold my-6'> fill out your prefernce</p>
           <main className='grid grid-cols-1 sm:grid-cols-2 gap-4 '>
           
        
            <div>
              
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
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
                  className="appearance-none block w-full px-3 bg-inherit py-2 border border-gray-600 rounded-md shadow-sm  focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                age
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="text"
                  placeholder='eg: 23'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="appearance-none block w-full px-3 bg-inherit py-2 border border-gray-600 rounded-md shadow-sm  focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
              >
                Skin ton
              </label>
              <div className="mt-1">
                <select className='  appearance-none block w-full px-3 bg-inherit py-2 border border-gray-600 rounded-md shadow-sm text-gray-500  focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm'>
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
                className="block text-sm font-medium text-black"
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
                  className="appearance-none block w-full px-3 bg-inherit py-2 border border-gray-600 rounded-md shadow-sm  focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
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
                  className="appearance-none block w-full px-3 bg-inherit py-2 border border-gray-600 rounded-md shadow-sm  focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            
            </div>
          
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black"
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
                  className="appearance-none block w-full px-3 bg-inherit py-2 border border-gray-600 rounded-md shadow-sm  focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            
            </div>
            <div className=''>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black"
              >
                talents
              </label>
              <div className=" mt-1 relative appearance-none  w-full px-3 py-4 border border-gray-600 rounded-md shadow-sm   focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
            <ul className='mt-1    '>
            {
                interests.map((tag,index)=>{
                    return(
                        <li key={index} className='inline-flex   items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#ED7D31]  text-white hover:bg-[[#F0F3F4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500  m-2'>
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
              <div className="mt-4 h-auto overflow-y-auto  p-2 border-[2px] border-white rounded-lg">
              <p className=' font-bold text-black pb-2'>select your talents prefernce</p>
                      <div className="flex flex-wrap gap-2">
                     
                        {Talents.map((interest, index) => (
                          <button
                            key={index}
                            type="button"
                           
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F0F3F4] text-black hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-2"
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
                className="group relative w-full mt-6 h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-900"
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

export default Custome