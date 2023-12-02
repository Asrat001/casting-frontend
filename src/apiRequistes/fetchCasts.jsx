import axios from "axios"


 const fetchCasts =async ( filter)=>{
    console.log(filter)
    return await axios.get(`http://localhost:8000/api/user/alluser?search=${filter.search}&limit=6&page=${filter.page}&sex=${filter.gender ?filter.gender:''}&minAge=0&maxAge=30`)
   }
const fetchCountedata = async()=>{
    return await axios.get(`http://localhost:8000/api/user/countusers`,{withCredentials:true})
}
const fetchCountorders = async ()=>{
    return await axios.get(`http://localhost:8000/api/order/countorders`,{withCredentials:true})
}

export{fetchCasts,fetchCountedata,fetchCountorders}