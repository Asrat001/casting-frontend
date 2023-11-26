import { useState } from "react";
import Navbar from "../componets/Navbar";
import Hero from "../componets/Hero";
import Filtter from "../componets/Filtter";
import {
  BsCash,
  BsFileMusic,
  BsFilm,
  BsPostageFill,
  BsSearch,
  BsServer,
} from "react-icons/bs";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoIosFlash } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import CastCard from "../componets/CastCard";
import Pagetation from "../componets/Pagetation";
import Baner from "../componets/Baner";
import icon from "../assets/vol.svg";
import space from "../assets/space.png";
import axios from "axios";

function Home() {
  return (
    <section className="mb-20 sm:mb-auto">
      <div className=" h-screen">
        <Hero />
      </div>
      <main className=" ">
        <div className="px-[40px] py-[35px] bg-[#3E8ED1]  overflow-x-hidden ">
          <h2 className=" font-bold text-[32px] ml-[60px] mb-6 text-white ">
            Popular category
          </h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center">
            <a className="  flex items-center gap-2 bg-white w-48 p-1 shadow-lg shadow-black rounded-lg">
              <i className=" place-items-center bg-[#E6EEFB] p-3 rounded-lg">
                <BsFileMusic color="#ED7D31" />
              </i>
              <h1>Music Video</h1>
            </a>
            <a className="  flex items-center gap-2 bg-white w-48 p-1 shadow-lg shadow-black rounded-lg">
              <i className=" place-items-center bg-[#E6EEFB] p-3 rounded-lg">
                <BsFilm color="#ED7D31" />
              </i>
              <h1>Film</h1>
            </a>
            <a className="  flex items-center gap-2 bg-white w-48 p-1 shadow-lg shadow-black rounded-lg">
              <i className=" place-items-center bg-[#E6EEFB] p-3 rounded-lg">
                <BsPostageFill color="#ED7D31" />
              </i>
              <h1>TV Series</h1>
            </a>
            <a className="  flex items-center gap-2 bg-white w-48 p-1  shadow-lg shadow-black rounded-lg">
              <i className=" place-items-center bg-[#E6EEFB] p-3 rounded-lg">
                <BiSolidCameraMovie color="#ED7D31" />
              </i>
              <h1>Commercial</h1>
            </a>
          </div>
        </div>
        <div className=" flex p-4 md:p-14 gap-4">
          <div className=" p-10 hidden md:block">
            <div className=" w-[200px] flex  items-center gap-2">
              <img src={icon} alt="icon" className=" w-6 h-6 " />
              <h1 className=" font-semibold font-exo">Filters</h1>
            </div>
            <div className="my-6">
              <h3>Geneder</h3>
              <select className=" border-[2px] mt-2 border-gray-400 rounded-lg w-full outline-none p-3 text-gray-900  bg-white ">
                <option defaultValue="" className=" hidden">
                  not selected
                </option>
                <option className=" accent-[#FAFAFA]  p-2">femeal</option>
                <option className="  hover:bg-[#FAFAFA]  p-2">men</option>
              </select>
            </div>
            <div className=" my-6">
              <h3 className=" font-exo font-medium">Skin Color</h3>
              <div className="mt-2">
                <label>
                  <input
                    type="checkbox"
                    className="  outline-none accent-orange-600"
                  />
                  <span className="w-[20px] h-[20px] ml-[8px] relative"></span>
                  Black
                </label>
              </div>
              <div className="">
                <label>
                  <input
                    type="checkbox"
                    className="outline-none accent-orange-600"
                  />
                  <span className="w-[20px] h-[20px] ml-[8px] relative"></span>
                  Brown
                </label>
              </div>
              <div className="">
                <label>
                  <input
                    type="checkbox"
                    className=" outline-none accent-orange-600"
                  />
                  <span className="w-[20px] h-[20px] ml-[8px] relative"></span>
                  White
                </label>
              </div>
            </div>
            <div className=" my-6">
              <h3 className=" font-exo font-medium">Age</h3>
              <div className="mt-2">
                <label>
                  <input
                    type="checkbox"
                    className=" outline-none accent-orange-600"
                  />
                  <span className="w-[20px] h-[20px] ml-[8px] relative"></span>
                  14-25
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    className=" outline-none accent-orange-600"
                  />
                  <span className="w-[20px] h-[20px] ml-[8px] relative"></span>
                  25-50
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="checkbox"
                    className=" outline-none accent-orange-600"
                  />
                  <span className="w-[20px] h-[20px] ml-[8px] relative"></span>
                  {`50 >`}
                </label>
              </div>
            </div>
          </div>
          <div className=" rounded-lg border-gray-300 border-[1px] md:p-6 w-full">
            <div className="flex mb-6 w-[60%]">
              <div className="  rounded-l-lg  border-gray-300 border-[1px] pl-3 w-full h-[50px] flex justify-center items-center">
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
            <p className="my-6 font-bold">1,200 Cast's</p>
            <CastCard />
            <div className="  mt-24   sm:px-20">
              <Pagetation />
            </div>
          </div>
        </div>
        <div className=" h-screen p-10 mt-[20px]">
          <h3 className=" text-black font-bold text-[30px] ">
            Why Energy Casting?
          </h3>
          <div className=" grid grid-cols-1 lg:grid-cols-2 sm:p-16  ">
            <div className=" h-[300px] sm:h-[500px] ">
              <img src={space} alt="co-workers image  h-full" className="h-full w-full object-cover " />
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2   gap-3 p-4  ">
              <div className=" w-auto bg-[#f38c4c] p-6   rounded-lg ">
                <div className="w-16 h-16 bg-[#ED7D31] rounded-full flex justify-center items-center">
                  <FaStar size={24} color="white" />
                </div>
                <div className="">
                  <h3 className=" text-white my-4">Helps talents shine.</h3>
                  <p className=" text-white text-[12px]">
                    It provides a space for talents to learn and secure
                    high-quality jobs.
                  </p>
                </div>
              </div>
              <div className="w-auto bg-[#F0F3F4] p-6   rounded-lg">
                <div className="w-16 h-16 bg-[#ED7D31] rounded-full flex justify-center items-center">
                  <IoIosFlash size={28} color="white" />
                </div>
                <div>
                  <h3 className=" text-black text-[16px] my-4">
                    Helps producer find professional talents.
                  </h3>
                  <p className=" text-[12px]">
                    It provides a space for talents to learn and secure
                    high-quality jobs.
                  </p>
                </div>
              </div>
              <div className=" w-auto bg-[#F0F3F4] p-6   rounded-lg">
                <div className="w-16 h-16 bg-[#ED7D31] rounded-full flex justify-center items-center">
                  <BsCash size={24} color="white" />
                </div>
                <div>
                  <h3 className=" text-black text-[16px] my-4">
                    Services are nearly free.
                  </h3>
                  <p className=" text-[12px]">
                    It provides a space for talents to learn and secure
                    high-quality jobs.
                  </p>
                </div>
              </div>
              <div className="w-auto bg-[#F0F3F4] p-6 hidden  sm:block rounded-lg">
                <div className="w-16 h-16 bg-[#ED7D31] rounded-full flex justify-center items-center">
                  <BsServer size={24} color="white" />
                </div>
                <div>
                  <h3 className=" text-black text-[16px] my-4">
                    Help producers get talents
                  </h3>
                  <p className=" text-[12px]">
                    It provides a space for talents to learn and secure
                    high-quality jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-96 sm:mt-40">
          <Baner />
        </div>
      </main>
      
    </section>
  );
}

export default Home;
