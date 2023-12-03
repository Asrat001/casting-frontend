import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/styles";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";
import { useAuthDispatch } from "../Context/AuthContext";
import Spinner from "../assets/Spinner.svg"
import { useEffect } from "react";
const image =[
  "https://res.cloudinary.com/diogyja1g/image/upload/v1695589767/image2_fu1qup.jpg",
  "https://res.cloudinary.com/diogyja1g/image/upload/v1695589768/86_sffdlz.jpg",
  "https://res.cloudinary.com/diogyja1g/image/upload/v1695590103/image1_hzy1af.jpg",
  "https://res.cloudinary.com/diogyja1g/image/upload/v1695589769/image3_fezfd6.jpg"
  ]


const Login = () => {
  const [rand, setRand] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAuthDispatch(); // Use useAuthDispatch hook
  /*const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        `${server}/user/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Login Success!");
        navigate("/");
        //window.location.reload(true);
      })
      .catch((err) => {
        toast.error("email or password incorrect");
      });
  };
  */
  useEffect(() => {
    let a = Math.floor(Math.random() * image.length);
    setRand(a)
}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true)
    try {
     await axios.post(`${server}/api/user/login`, {
        email,
        password,
      },{withCredentials:true}).then(res=>{
        sessionStorage.setItem('user',JSON.stringify(res.data));
        setIsloading(false)
        if(res.data.isAdmin===true){
          navigate('/admin')
        }else{
          navigate(from,{replace:true})
        }
      }).catch(error=>{
        const status= error.res.status

        if(status===400){
          toast.warning('fill all the feilds',{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          
          })
          setIsloading(false)
        }
        if(status===404){
          toast.warning('user not found , please register ',{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          
          })
        }
      });

      // Redirect to the home page after successful login
    } catch (error) {
      dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid email or password' }); // Dispatch the login failure action
      toast.error('Invalid email or password');
      setIsloading(false)
    }
  };
  
  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 ">
  
      
      
      <div className="w-full h-full">

        <div className="bg-white h-full py-8 px-4 shadow  sm:px-10">
        <h2 className="my-6 text-3xl font-extrabold text-[#ED7D31]">
          Wellcome Back !!
        
        </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.noramlFlex} justify-between`}>
              <div className={`${styles.noramlFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href=".forgot-password"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] items-center flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-900"
              >
                   {isLoading?<img src={Spinner} alt="loding" className="w-10 h-10"/>:'submit'}
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Not have any account?</h4>
              <Link to="/register" className="text-blue-600 pl-2">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div className=" hidden md:block bg-gradient-to-tr  from-[#243046] to-[#ED7D31]">
        <img src={image[rand]}  alt="loginimage" className=" w-full h-full object-cover mix-blend-overlay "/>
      </div>
    </div>
  );
};

export default Login;