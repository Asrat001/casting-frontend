import React from 'react'
import icon from "../assets/vol.svg";
import { useState } from 'react';

const Filtter = ({HandelGender, HandelSkin}) => {
  const [skin, setSkin] = useState('');
  const HandelSkinChenge=(event)=>{
    setSkin(event?.target.value)
    HandelSkin(skin)
    
  }
  return (
    <div className=" p-10 hidden md:block">
    <div className=" w-[200px] flex  items-center gap-2">
      <img src={icon} alt="icon" className=" w-6 h-6 " />
      <h1 className=" font-semibold font-exo">Filters</h1>
    </div>
    <div className="my-6">
      <h3>Geneder</h3>
      <select onChange={HandelGender} className=" border-[2px] mt-2 border-gray-400 rounded-lg w-full outline-none p-3 text-gray-900  bg-white ">
        <option defaultValue="" className=" hidden">
          not selected
        </option>
        <option value='' className="  hover:bg-[#FAFAFA]  p-2">All</option>
        <option value='female' className=" accent-[#FAFAFA]  p-2">Femeal</option>
        <option value='male' className="  hover:bg-[#FAFAFA]  p-2">men</option>
       
      </select>
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
  )
}

export default Filtter