import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import {  AiOutlineArrowRight } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import {BiLogoInstagramAlt,BiLogoTelegram,BiLogoFacebook,BiLogoYoutube} from 'react-icons/bi'

const RootLayout = () => {
  return (
    <>
      <header className=" ">
        <Navbar />
      </header>
      <main className=" ">
        <Outlet />
      </main>
      <footer className=" bg-[#0f1623]">
        <div className="bg-gradient-to-r from-green-400/60 to-gray-600 h-fit py-4 px-4 sm:px-20">
          <p className=" text-[25px] sm:text-[40px] font-bold font-Comfortaa  bg-gradient-to-r from-gray-100  to-yellow-600 bg-clip-text text-transparent">
            {" "}
            Book your favirroite Talent !{" "}
          </p>
          <div className="flex items-center gap-x-4">
            <a className="border-[3px] font-Comfortaa border-gray-100 p-2 flex items-center gap-x-4">
              <BsFillTelephoneFill /> Call us
            </a>
            <a className=" font-Comfortaa text-[18px] flex items-center gap-x-3 text-gray-200 underline underline-offset-4">
              {" "}
              visit our office <AiOutlineArrowRight/>
            </a>
          </div>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-3  place-items-center justify-items-center p-10">
          <div>
            <h3 className=" font-Comfortaa text-green-300 text-[20px]">about us </h3>
            <p className=" font-Comfortaa text-gray-400 text-[16px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam unde animi obcaecati optio pariatur eum debitis cupiditate sunt aperiam quos?</p>
            <div className=" flex items-center gap-x-6 mt-4 ">
<a className="flex justify-center items-center p-2 border-[2px] border-green-400 "><BiLogoFacebook className="text-gray-100 w-6 h-6"/> </a>
<a className="flex justify-center items-center p-2 border-[2px] border-green-400 "><BiLogoInstagramAlt className="text-gray-100 w-6 h-6" /> </a>
<a className="flex justify-center items-center p-2 border-[2px] border-green-400 "><BiLogoTelegram className="text-gray-100 w-6 h-6"/> </a>
<a className="flex justify-center items-center p-2 border-[2px] border-green-400 "><BiLogoYoutube className="text-gray-100 w-6 h-6"/> </a>
            </div>
          </div>
          <div className="mt-4">
            <p className=" font-Comfortaa text-green-300 text-[20px]">Energy Casting</p>
            <div className="mb-16">
<div className=" flex items-center gap-x-4">
<p className=" font-Comfortaa text-gray-200 text-[16px]">Location</p>
<p className=" font-Poppins text-[14px] text-gray-500">Bole morning star 2nd flor</p>
</div> 
<div className=" flex items-center gap-x-4">
<p className=" font-Comfortaa text-gray-200 text-[16px]">Phone 1</p>
<p className=" font-Poppins text-[14px] text-gray-500">+251916562124</p>
</div> 
<div className=" flex items-center gap-x-4">
<p className=" font-Comfortaa text-gray-200 text-[16px]">phone 2</p>
<p className=" font-Poppins text-[14px] text-gray-500">+251953423253</p>
</div> 

            </div>
          </div>
          <div className="mb-10">
            <p className=" font-Comfortaa text-green-300 text-[20px]">Links</p>
            <div className=" flex  sm:flex-col items-center gap-x-4 ">
              <a className=" text-gray-300 text-[16px] underline underline-offset-4">register</a>
              <a className=" text-gray-300 text-[16px] underline underline-offset-4">login</a>
              <a className=" text-gray-300 text-[16px] underline underline-offset-4"> blog</a>
              <a className=" text-gray-300 text-[16px] underline underline-offset-4">youtube</a>
            </div>
          </div>
        </div>
        <div className="sm:px-10 flex flex-col sm:flex-row items-center justify-center sm:justify-between py-4">
          <p className=" font-Comfortaa text-[16px] text-green-500/40">2023@energy casting plc all right reserved</p>
          <p className=" font-Comfortaa text-[16px] text-green-500/40">Designed and Devloped by <a className=" text-green-400 underline">2A Tech</a></p>
          <p className=" font-Comfortaa text-[16px] text-green-500/40">Terms
Privacy Policy</p>
        </div>
      </footer>
    </>
  );
};

export default RootLayout;
