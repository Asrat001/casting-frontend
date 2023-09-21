import { useState } from "react";
import Navbar from "../componets/Navbar";
import Hero from "../componets/Hero";
import Filtter from "../componets/Filtter";
import { BsSearch } from "react-icons/bs";
import CastCard from "../componets/CastCard";

function Home() {

  return (
    
    <section className="">
     <Hero/>
     <main className=" bg-[#243046] p-4">
      <div className=" mt-[50px] grid grid-cols-1 sm:grid-cols-3 place-items-center justify-items-center ">
        <p className="text-[32px] font-bold text-white">Filter Cast's</p>
        <div className=" rounded-full border-green-400 border-[3px] pl-3  w-full flex justify-center items-center">
          <BsSearch className="w-8 h-8 text-white" />
          <input
            type="text"
            placeholder="eg : music video , film , promotion"
            className=" border-none outline-none text-white   focus:border-sky-500 bg-transparent rounded-r-full p-2  w-full border-green-400"
          />
        </div>
        <div className=" bg-slate-900 space-x-2 px-3 py-2 rounded-xl">
          <select className=" outline-none p-2  text-white  bg-slate-800 ">
            <option >skin color</option>
            <option className="text-green-400">black</option>
            <option>brown</option>
            <option>white</option>
          </select>
          <select className=" outline-none p-2 text-white  bg-slate-800 ">
            <option disabled>age</option>
            <option className="">16-25</option>
            <option>25-40</option>
            <option>40-60</option>
          </select>
          <select className=" outline-none p-2 text-white  bg-slate-800 ">
            <option disabled>sex</option>
            <option>femeal</option>
            <option>men</option>
          </select>
        </div>
      </div>
      <div className="mt-24">
      <CastCard/>
      </div>
      </main>
      </section>
    
  );
}

export default Home;
