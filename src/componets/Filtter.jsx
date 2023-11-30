import React from 'react'
import icon from "../assets/vol.svg";
const Filtter = () => {
  return (
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
        <option value='femeal' className=" accent-[#FAFAFA]  p-2">femeal</option>
        <option value='men' className="  hover:bg-[#FAFAFA]  p-2">men</option>
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
  )
}

export default Filtter