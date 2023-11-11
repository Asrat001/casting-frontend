import { useState } from "react";
import Navbar from "../componets/Navbar";
import Hero from "../componets/Hero";
import Filtter from "../componets/Filtter";
import { BsFileMusic, BsFilm, BsPostageFill, BsSearch } from "react-icons/bs";
import { BiSolidCameraMovie } from "react-icons/bi";
import CastCard from "../componets/CastCard";
import Pagetation from "../componets/Pagetation";
import Baner from "../componets/Baner";
import icon from '../assets/vol.svg'


function Home() {
  return (
    <section className="">
      <Hero />
      <main className=" ">
        <div className="px-[40px] py-[35px] ">
          <h2 className=" font-bold text-[32px] ml-[60px] mb-6 ">
            Popular category
          </h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center">
            <a className="  flex items-center gap-2">
              <i className=" place-items-center bg-[#E6EEFB] p-6 rounded-lg">
                <BsFileMusic color="#ED7D31" />
              </i>
              <h1>Music Video</h1>
            </a>
            <a className="  flex items-center gap-2">
              <i className=" place-items-center bg-[#E6EEFB] p-6 rounded-lg">
                <BsFilm color="#ED7D31" />
              </i>
              <h1>Film</h1>
            </a>
            <a className="  flex items-center gap-2">
              <i className=" place-items-center bg-[#E6EEFB] p-6 rounded-lg">
                <BsPostageFill color="#ED7D31" />
              </i>
              <h1>Theatre</h1>
            </a>
            <a className="  flex items-center gap-2">
              <i className=" place-items-center bg-[#E6EEFB] p-6 rounded-lg">
                <BiSolidCameraMovie color="#ED7D31" />
              </i>
              <h1>Set Come</h1>
            </a>
          </div>
        </div>
        <div className=" flex  p-14 gap-4">
         
            <div className=" p-10">
             <div className=" w-[200px] flex  items-center gap-2">

                <img src={icon} alt="icon" className=" w-6 h-6 "/>
              <h1 className=" font-semibold font-exo">Filters</h1>
             </div>
             <div className="my-6">
              <h3>Geneder</h3>
             <select className=" border-[2px] mt-2 border-gray-400 rounded-lg w-full outline-none p-3 text-gray-900  bg-white ">
            <option  defaultValue='' className=" hidden">not selected</option>
            <option className=" accent-[#FAFAFA]  p-2">femeal</option>
            <option className="  hover:bg-[#FAFAFA]  p-2">men</option>
          </select>
             </div>
             <div className=" my-6">

             <h3 className=" font-exo font-medium">Skin Color</h3>
           <div className="mt-2">
           <label>
                <input type="checkbox" className="  outline-none accent-orange-600"/>
                <span className="w-[20px] h-[20px] ml-[8px] relative">
                </span>
                Black
              </label>
           </div>
           <div className="">
           <label>
                <input type="checkbox" className="outline-none accent-orange-600" />
                <span className="w-[20px] h-[20px] ml-[8px] relative">
                </span>
                Brown
              </label>
           </div>
            <div className="">
            <label>
                <input type="checkbox" className=" outline-none accent-orange-600" />
                <span className="w-[20px] h-[20px] ml-[8px] relative">
                </span>
                White
              </label>
            </div>
           </div>
           <div className=" my-6">
             <h3 className=" font-exo font-medium">Age</h3>
           <div className="mt-2">
           <label>
                <input type="checkbox" className=" outline-none accent-orange-600" />
                <span className="w-[20px] h-[20px] ml-[8px] relative">
                </span>
                14-25
              </label>
           </div>
           <div>
           <label>
                <input type="checkbox" className=" outline-none accent-orange-600" />
                <span className="w-[20px] h-[20px] ml-[8px] relative">
                </span>
                25-50
              </label>
           </div>
            <div>
            <label>
                <input type="checkbox" className=" outline-none accent-orange-600" />
                <span className="w-[20px] h-[20px] ml-[8px] relative">
                </span>
                {`50 >`}
              </label>
            </div>
           </div>
           
            </div>
          <div className=" rounded-lg border-gray-300 border-[1px] p-6">
     <    div className="flex mb-6 w-[600px]">
     <         div className="  rounded-l-lg  border-gray-300 border-[1px] pl-3 w-full h-[50px] flex justify-center items-center">
              <input
                type="text"
                placeholder="eg : music video , film , promotion"
                className=" border-none outline-none text-black   focus:border-sky-500 bg-transparent rounded-r-full p-2  w-full border-green-400"
              />
            </div>
            <button className=" bg-[#ED7D31] p-2 w-[60px] rounded-r-lg">
            <BsSearch className="w-8 h-8 text-white" />
            </button>
     </div>
     <p className="my-6 font-bold">
      1,200 Cast's
     </p>
           <CastCard/>
           <div className="  mt-24   sm:px-20">
          <Pagetation />
        </div>
          </div>
        </div>
        
        <div className="mt-24 ">
          <Baner />
        </div>
      </main>
    </section>
  );
}

export default Home;
