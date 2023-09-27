import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Total =[
  {
    disc:"total cast",
    value:2000,
    route:"user"
  },
  {
    disc:"men",
    value:1200,
    route:"user"

  },
  {
    disc:"female",
    value:890,
    route:"user"
  },
  {
    disc:"order",
    value:300,
    route:"order"
  },
  {
    disc:"custom order",
    value:600,
    route:"order"
  }
]
   



const AdminDashboard = () => {
  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 ">
    {
Total.map((data,index)=>{
  return(  
    
  <div className="bg-white  shadow-lg" key={index}>
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{data.disc}</h3>
      <p className="text-gray-600">{data.value}</p>
    </div>
  </div>
)
})
    }
      
    </div>
  );
};

export default AdminDashboard;