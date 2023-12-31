import { React, useState ,useEffect,useContext} from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/styles";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../server";
import Spinner from "../assets/Spinner.svg"
import { toast } from "react-toastify";
import { useAuthDispatch } from "../Context/AuthContext";
const image =[
"https://res.cloudinary.com/diogyja1g/image/upload/v1695589767/image2_fu1qup.jpg",
"https://res.cloudinary.com/diogyja1g/image/upload/v1695589768/86_sffdlz.jpg",
"https://res.cloudinary.com/diogyja1g/image/upload/v1695590103/image1_hzy1af.jpg",
"https://res.cloudinary.com/diogyja1g/image/upload/v1695589769/image3_fezfd6.jpg"
]
const Signup = () => {
  const [rand, setRand] = useState(0);
  const [email, setEmail] = useState("");
  const [fullname, setfullName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAuthDispatch();

  useEffect(() => {
      let a = Math.floor(Math.random() * image.length);
      setRand(a)
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... handle form submission and API request using axios
    try {
      setIsloading(true)
      const userData = {
        fullname: fullname,
        email: email,
        password: password,
      };
       await axios.post(`${server}/api/user/signup`, userData,{withCredentials:true},{
        headers: {
          'Content-Type': 'application/json',
          // Add other headers if needed
          // 'Authorization': 'Bearer token',
        },
      }).then(response=>{
        console.log(response.status)
        if(response.status===200){
          sessionStorage.setItem('user',JSON.stringify(response.data));
          toast.success('you registed sucussfully',{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          
          })
          setIsloading(false)
          navigate('/verify');
        }
      }).catch(error=>{
         const status=error.response.status
          if(status===400){
            <div className="p-6"> 
   {
         toast.error('User already exists',{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        
        })
   }
            </div>
        setIsloading(false)
          }
      });
      // Dispatch signup success action
  
     
       
      setfullName('');
      setEmail('');
      setPassword('');
      ;
      // Redirect to login page
      
    } catch (error) {
      dispatch({ type: 'SIGNUP_FAILURE', payload: error.message }); // Dispatch signup failure action
      // ... handle error case
      setIsloading(false)
      toast.error('Signup failed. Please try again.');
    }
  };

  

  return (
    <div className=" min-h-screen grid grid-cols-1 sm:grid-cols-2 ">
      <div className="w-full h-full ">
        <div className="bg-white h-full py-8 px-4 shadow  sm:px-10">

        
        <h2 className="mt-6 text-3xl font-extrabold text-[#ED7D31]">
          Cast Registration
        
        </h2>
   
        
          <form className="space-y-6 mt-20" onSubmit={handleSubmit}>
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="text"
                  autoComplete="name"
                  required
                  value={fullname}
                  onChange={(e) => setfullName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

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

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex items-center justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ED7D31] hover:bg-[#ED7D31]/70"
              >
                {isLoading?<img src={Spinner} alt="loding" className="w-10 h-10"/>:'submit'}
              </button>
            </div>
            <div className={`${styles.noramlFlex} w-full`}>
              <h4>Already have an account?</h4>
              <Link to="/login" className="text-blue-600 pl-2">
                Sign In
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

export default Signup;
