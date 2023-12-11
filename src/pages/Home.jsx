import { useEffect, useRef, useState } from "react";
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
import space from "../assets/space.png";
import axios from "axios";
import { fetchCasts } from "../apiRequistes/fetchCasts";
import { useQuery } from "react-query";
import Slider from "../componets/Slider";
import loding from "../assets/loging.svg";
import Loading from "../componets/loading";
function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [page, setPage] = useState(1);
 
 

  const HandelAger = (event) => {
    const valu = event?.target.value;
    filter.age = valu;
  };
  const HandelGender = (event) => {
    const valu = event?.target.value;
    setGender(valu);
  };
  const HandelSkin = (data) => {
    setSkin(data);
  };

  const HandelPage = (page) => {
    setPage(page);
  };
  const filter = {
    search: searchValue,
    gender: gender,
    page: page,
  };
  const {
    isLoading: lodingCast,
    data: CastData,
    isError,
  } = useQuery({
    queryKey: ["cast-data", filter],
    queryFn: () => fetchCasts(filter),
  });
  useEffect(() => {
    window.scrollTo(0, 400); // Reset scroll position on page change
  }, [page]);

  return (
    <section className="">
      <div className=" h-screen">
        <Hero />
      </div>
      <main className=" mt-8 ">
        <div className=" flex flex-col justify-between  md:p-8 gap-4 ">
          <div className=" w-full p-6">
            <div className="flex gap-4 w-full items-center">
              <div className="   border-gray-300 border-[1px] pl-3 w-full md:w-[60%]  h-[50px] flex justify-center items-center">
                <input
                  type="text"
                  placeholder="eg : music video , film , promotion"
                  onChange={(e) => setSearchValue(e.target.value)}
                  className=" border-none outline-none text-black   focus:border-sky-500 bg-transparent rounded-r-full p-2  w-full border-green-400"
                />
                <button className=" bg-[#ED7D31] p-2 ">
                  <BsSearch className="w-8 h-8 text-white" />
                </button>
              </div>

              <div className=" hidden md:flex gap-4">
                <div className="">
                  <select
                    onChange={HandelGender}
                    className=" border-[1px]  border-gray-400  w-full outline-none p-3 text-gray-900  bg-white "
                  >
                    <option defaultValue="" className=" hidden">
                      Gender
                    </option>
                    <option value="" className="  hover:bg-[#FAFAFA]  p-2">
                      All
                    </option>
                    <option value="FEMALE" className=" accent-[#FAFAFA]  p-2">
                      Female
                    </option>
                    <option value="MALE" className="  hover:bg-[#FAFAFA]  p-2">
                      Male
                    </option>
                  </select>
                </div>
                <div className="">
                  <select
                    onChange={HandelGender}
                    className=" border-[1px]  border-gray-400  w-full outline-none p-3 text-gray-900  bg-white "
                  >
                    <option defaultValue="" className=" hidden">
                      Age
                    </option>
                    <option value="" className="  hover:bg-[#FAFAFA]  p-2">
                      All
                    </option>
                    <option value="FEMALE" className=" accent-[#FAFAFA]  p-2">
                      Female
                    </option>
                    <option value="MALE" className="  hover:bg-[#FAFAFA]  p-2">
                      Male
                    </option>
                  </select>
                </div>
                <div className="">
                  <select
                    onChange={HandelGender}
                    className=" border-[1px]  border-gray-400  w-full outline-none p-3 text-gray-900  bg-white "
                  >
                    <option defaultValue="" className=" hidden">
                      Skin ton
                    </option>
                    <option value="" className="  hover:bg-[#FAFAFA]  p-2">
                      All
                    </option>
                    <option value="FEMALE" className=" accent-[#FAFAFA]  p-2">
                      Female
                    </option>
                    <option value="MALE" className="  hover:bg-[#FAFAFA]  p-2">
                      Male
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <p className="my-6 text-[16px] font-bold">
              {CastData?.data.total} Cast's avilable
            </p>
          <div className="min-h-screen" id="card">
          <CastCard Data={CastData} lodingCast={lodingCast} error={isError} HandelPage={HandelPage} />
          </div>
           <div className="mt-6">
           <Pagetation Data={CastData} HandelPage={HandelPage} />
           </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className=" md:ml-8 text-black font-bold text-[30px] ">
            Why Energy Casting?
          </h3>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 sm:p-16  ">
            <div className=" hidden md:block h-[300px] sm:h-[500px] ">
              <img
                src={space}
                alt="co-workers image"
                className=" w-full object-cover "
              />
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2   gap-3 p-4   ">
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
        <div className="mt-100 sm:mt-40">
          <Baner />
        </div>
      </main>
    </section>
  );
}

export default Home;
