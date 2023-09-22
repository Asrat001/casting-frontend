import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

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
            <a className=" font-Comfortaa text-[18px] text-gray-200 underline underline-offset-4">
              {" "}
              visit our office
            </a>
          </div>
        </div>
        <div className=" grid grid-cols-3  place-items-center justify-items-center p-10">
          <div>
            <h3 className=" font-Comfortaa text-green-300 text-[20px]">about us </h3>
            <p className=" font-Comfortaa text-gray-300 text-[16px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam unde animi obcaecati optio pariatur eum debitis cupiditate sunt aperiam quos?</p>
          </div>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam unde animi obcaecati optio pariatur eum debitis cupiditate sunt aperiam quos?</p>
          </div>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam unde animi obcaecati optio pariatur eum debitis cupiditate sunt aperiam quos?</p>
          </div>
        </div>
        
      </footer>
    </>
  );
};

export default RootLayout;
