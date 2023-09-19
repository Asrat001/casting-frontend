import { useState } from "react";
import Navbar from "../componets/Navbar";
import Hero from "../componets/Hero";
import Filtter from "../componets/Filtter";
import { BsSearch } from "react-icons/bs";
import CastCard from "../componets/CastCard";

function Home() {

  return (
    <div>
      <div className=" bg-hero-bg  bg-cover bg-no-repeat  h-screen">
        <Navbar />
        <Hero />
      </div>
      <div className="px-[80px] mt-[50px] grid grid-cols-4 place-items-center justify-items-center">
        <p className="text-[32px] font-bold text-white">cast catagory</p>
        <div className=" rounded-full border-green-400 border-[3px] pl-3  w-full flex justify-center items-center">
          <BsSearch className="w-8 h-8 text-white" />
          <input
            type="text"
            placeholder="eg : music video , film , promotion"
            className=" border-none outline-none text-white   focus:border-sky-500 bg-transparent rounded-r-full p-2  w-full border-green-400"
          />
        </div>
        <div>
          <select className=" outline-none p-2 rounded-lg bg-green-400 border-[4px] border-white">
            <option disabled>skin color</option>
            <option className="text-green-400">black</option>
            <option>brown</option>
            <option>white</option>
          </select>
        </div>
        <div>
          <select className=" outline-none p-2 rounded-lg bg-green-400 border-[4px] border-white">
            <option disabled>sex</option>
            <option>femeal</option>
            <option>men</option>
          </select>
        </div>
      </div>
      <div className="mt-20">
      <CastCard/>
      </div>
      
    </div>
  );
}

export default Home;
