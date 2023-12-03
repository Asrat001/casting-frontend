import React, { useState, useEffect } from "react";
import { MdBarChart, MdOnlinePrediction } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { Bar } from "react-chartjs-2";
import  {Chart as ChartJs,registerables}  from "chart.js";
import { fetchCountedata,fetchCountorders } from "../apiRequistes/fetchCasts";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
ChartJs.register(...registerables)
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
const registeredUsersData=[
  {
    month:'January',
    value:300
  },
  {
    month:'February',
    value:100
  },
  {
    month:'March',
    value:200
  },
  {
    month:'April',
    value:350
  },
  {
    month:'May',
    value:400
  },
  {
    month:'June',
    value:600
  },
  {
    month:'July',
    value:300
  },
  
]


const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Registered Users',
      backgroundColor: '#f38c4c',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 1,
      data: registeredUsersData.map((data)=>data.value), 
    },
  ],
};



const AdminDashboard = () => {
 
 
  const navigate =useNavigate()
  const location=useLocation()
  const [lodde,setLoding]=useState(false)
  const [Total,setTotal]=useState([])
  const from=location.state?.from?.pathname||'/login'
  const user = JSON.parse(sessionStorage.getItem('user'));
       if(lodde){
        const { isLoading:lodingCountData,error ,data:CauntData} = useQuery("count-data", fetchCountedata);
        const { isLoading:lodingCountOrder ,data:OrderCount} = useQuery("count-order",fetchCountorders); 
        const Total =[
          {
            disc:"total cast",
            value:CauntData?.data.allcasts,
            route:"user"
          },
          {
            disc:"men",
            value:CauntData?.data.male,
            route:"user"
        
          },
          {
            disc:"female",
            value:CauntData?.data.female,
            route:"user"
          },
          {
            disc:"order",
            value:OrderCount?.data,
            route:"order"
          },
          {
            disc:"custom order",
            value:600,
            route:"order"
          }
        ]
        setTotal(Total)
       }

    
   

useEffect(()=>{
  const user = JSON.parse(sessionStorage.getItem('user'));
  console.log(user?.isAdmin)
  if(user?.isAdmin==false||!user){

    navigate(from,{replace:true})
  }else{
    setLoding(true)
  }
},[])

 
  return (
    <section>
      <h3 className="my-2 text-[24px] font-bold">Dashboard</h3>
 <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5 ">
    {
Total.map((data,index)=>{
  return(  
    
  <div className="bg-white flex  items-center justify-around  shadow-lg" key={index}>
  { data.disc=='order'||data.disc=='custom order' ?
      <div className="p-4 w-fit h-fit bg-[#F0F3F4] rounded-full">
   <FaCartArrowDown size={24}/>
      </div>:
        <div className="p-4 w-fit h-fit bg-[#F0F3F4] rounded-full">
        <MdBarChart size={24}/>
           </div>
  }
    <div className="p-4">
      <h3 className="text-[14px] text-gray-600 mb-2">{data.disc}</h3>
      <p className="text-gray-600 font-bold">{data.value}</p>
    </div>
  </div>
)
})
    }
  
      
    </div>
    <div className=" grid grid-cols-1 sm:grid-cols-2 my-8 place-items-center gap-3">
  <div className="w-full">
  <h3 className=" text-[24px] font-bold my-2 text-black"> Registerd Users</h3>
  <div className="w-full">
  <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: 'Registered Users Chart',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'top',
          },
        }}
      />
  </div>
  </div>
  <div className=" w-full">
  <h3 className=" text-[24px] font-bold my-2 text-black"> Daily Active Users</h3>
  <div className=" bg-white w-full h-32 rounded-lg mt-3 p-4">
  <MdOnlinePrediction color="green" size={28}/>
  <div className=" flex items-center gap-4 p-2">
    <IoMdPerson size={24} className=" text-gray-700"/>
    <p className=" text-xl text-gray-700 font-bold">200</p>
   </div>
  </div>
  </div>
    </div>
    </section>
   
  );
};
export default AdminDashboard