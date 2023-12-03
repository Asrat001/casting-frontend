import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineUser, AiFillPlusCircle } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Drawer from "./drawer";
import { useState } from "react";

const AdminLayout = () => {
  const [isdrawerOpen, setIsdrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsdrawerOpen(!isdrawerOpen);
  };

  const user = JSON.parse(sessionStorage.getItem("user"));
  return (
    <main className=" flex flex-col md:flex-row">
      <nav className="  fixed top-0 left-0 w-full md:w-fit   bg-white md:min-h-screen  mix-blend-hard-normal py-4 px-5 ">
        <div className=" flex justify-between items-center">
          <button onClick={toggleDrawer} className=" block sm:hidden">
            <GiHamburgerMenu className="w-8 h-8 text-gray-600" />
            ADMIN DASHBOARD
          </button>
          <img
            src={user?.img}
            alt="profile pic"
            className={` ${
              user ? "block" : " hidden"
            } w-16 h-16 rounded-full border-[3px]  border-[#ED7D31]  object-cover`}
          />
        </div>
        <div className="hidden md:block">
          <h2 className=" text-[18px]  text-black balance font-extrabold ">
            Energy casting Admin Dashbord
          </h2>
          <hr />
          <ul className=" mt-20 space-y-4 ">
            <li className=" bg-[#ECF3F7]   p-4 px-4 flex items-center gap-2 rounded-xl shadow-lg shadow-gray-600 ">
              <div className="p-1  bg-white h-fit w-fit rounded-full">
                <BiSolidDashboard size={28} />
              </div>
              <NavLink to="/admin">Dashboard</NavLink>
            </li>
            <li className=" bg-[#ECF3F7]   p-4 px-4 flex items-center gap-2 rounded-xl shadow-lg shadow-gray-600 ">
              <div className="p-1  bg-white h-fit w-fit rounded-full">
                <AiOutlineUser size={28} />
              </div>
              <NavLink to="user">Mange users</NavLink>
            </li>
            <li className="bg-[#ECF3F7]   p-4 px-4 flex items-center gap-2 rounded-xl shadow-lg shadow-gray-600 ">
              <div className="p-1  bg-white h-fit w-fit rounded-full">
                <AiFillPlusCircle size={28} />
              </div>
              <NavLink to="/register">Add cast</NavLink>
            </li>
            <li className=" bg-[#ECF3F7]   p-4 px-4 flex items-center gap-2 rounded-xl shadow-lg shadow-gray-600 ">
              <div className="p-1  bg-white h-fit w-fit rounded-full">
                <IoNotificationsSharp size={28} className=" text-gray-500" />
              </div>
              <NavLink to="order">order</NavLink>
            </li>
            <li className=" bg-[#ECF3F7]   p-4 px-4 flex items-center gap-2 rounded-xl shadow-lg shadow-gray-600  ">
              <div className="p-1  bg-white h-fit w-fit rounded-full">
                <IoNotificationsSharp size={28} className=" text-gray-500" />
              </div>

              <NavLink to="custom-order">custom order</NavLink>
            </li>
          </ul>
        </div>
        <ul></ul>
      </nav>
      <div className=" w-full p-6 mt-8 md:mt-0 md:ml-[330px]  h-screen bg-[#EAEBEC]">
        <Outlet />
      </div>
      <Drawer isdrawerOpen={isdrawerOpen} toggleDrawer={toggleDrawer} />
    </main>
  );
};

export default AdminLayout;
