import axios from "axios"
import { server } from "../server"



 const fetchCasts =async ( filter)=>{
   
    return await axios.get(`${server}/api/user/alluser?search=${filter.search}&limit=8&page=${filter.page}&sex=${filter.gender ?filter.gender:''}&minAge=0&maxAge=30`)
   }
const fetchCountedata = async()=>{
    return await axios.get(`${server}/api/user/countusers`,{withCredentials:true})
}
const fetchCountorders = async ()=>{
    return await axios.get(`${server}/api/order/countorders`,{withCredentials:true})
}
const fetchOrder = async ()=>{
    return await axios.get(`${server}/api/order/getallorder`,{withCredentials:true})
}
const fetchCustomOrder = async ()=>{
    return await axios.get(`${server}/api/order/getallcustomorder`,{withCredentials:true})
}


export{fetchCasts,fetchCountedata,fetchCountorders,fetchCustomOrder,fetchOrder}