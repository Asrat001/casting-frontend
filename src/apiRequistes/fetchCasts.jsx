import axios from "axios"

 const fetchCasts =()=>{
    return axios.get(`http://localhost:8000/api/user/alluser?search=&limit=6&page=1&sex=&minAge=0&maxAge=30`)
   }
const fetchCountedata =()=>{
    return axios.get(`http://localhost:8000/api/user/countusers`,{withCredentials:true})
}
const fetchCountorders =()=>{
    return axios.get(`http://localhost:8000/api/order/countorders`,{withCredentials:true})
}

export{fetchCasts,fetchCountedata,fetchCountorders}