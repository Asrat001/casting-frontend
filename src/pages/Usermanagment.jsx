import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagetation from "../componets/Pagetation";
import { useShoppingCart } from "../Context/CartContext";
import { fetchCasts } from "../apiRequistes/fetchCasts";
import { useQuery } from "react-query";

const Usermanagment = ({}) => {
  const [page, setPage] = useState(1)
  const HandelPage=(page)=>{
    setPage(page)
}
  const filter={
    search:"",
    gender:"",
    page:1
  }
  const { isLoading:lodingCast ,data:CastData,isError} = useQuery({ queryKey: ['cast-data',filter], queryFn:()=>fetchCasts(filter) })

  return (
    <div className="">
   
      <div className="w-full">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-xl font-bold mb-4">User Management</h2>
          <div className="flex items-center gap-x-4 my-4">
            <select className="border border-gray-300 rounded  px-4 py-2 focus:outline-none">
              <option defaultValue='' className=" hidden">status</option>
              <option value="">Active</option>
              <option value="category2">not Active</option>
            
            </select>
            <select className="border border-gray-300 rounded  px-4 py-2 focus:outline-none">
              <option defaultValue="" className=" hidden">skin tone</option>
              <option value="">black</option>
              <option value="category2">brown</option>
              <option value="category2">white</option>
            </select>
            <select className="border border-gray-300 rounded  px-4 py-2 focus:outline-none">
              <option defaultValue="" className=" hidden">age</option>
              <option value="">10-15</option>
              <option value="category2">15-30</option>
            
            </select>
            <input
              type="text"
              placeholder="music , film , promotion"
              className="border border-gray-300 rounded ... ... px-4 py-2 focus:outline-none ml-2"
            />
            <button className="bg-[#ED7D31] hover:bg-orange-900 text-white font-bold py-2 px-4 rounded ml-2">
              Search
            </button>
          </div>
          
           
              <table className="min-w-full divide-y divide-gray-200 " >
              <thead className="bg-gray-50">
                <tr className=" w-full">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Skin ton
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    sex
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                    status
                  </th>
                   <th className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
                    age
                  </th>
                  <th className="py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider ">
                    Action
                  </th>
             
                </tr>
              </thead>
              {
          CastData?.data.users.map((item,indx)=>{
            return(
              <tbody className="bg-white divide-y divide-gray-200" key={indx}>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {item.fullname}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {item.phone}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item.skintone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item.gender}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item.isActive?"Active":"Not Active"}</div>
                </td>
                <td className=" py-4 whitespace-nowrap text-center text-sm font-medium">
                 <p className=" text-gray-500">{item.age}</p>
                </td>
                <td className=" py-4 whitespace-nowrap text-right text-sm font-medium">
                  <select className="border border-gray-300 rounded   focus:outline-none">
                    <option value="">inactive</option>
                    <option value="">active</option>
                  </select>
                </td>
              </tr>
            </tbody>
            )
            })
         }
              
            </table>
   
        </div>
      </div>
      <Pagetation Data={CastData}/>
    </div>
  );
};

export default Usermanagment ;
