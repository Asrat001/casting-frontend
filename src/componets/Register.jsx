import { React, useState ,useEffect} from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/styles";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();

  useEffect(() => {
      let a = Math.floor(Math.random() * image.length);
      setRand(a)
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "application/json" } };
    const userData = {
      fullname:fullname,
      email: email,
      password:password
    };
    await axios
      .post(
        `${server}/user/signup`,
        userData,
        config
        
      )
      .then((res) => {
        toast.success("you have successfully signed up now login to continue");
        setfullName("");
        setEmail("");
        setPassword("");
        //window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.response.data);
      });
  };

  return (
    <div className=" min-h-screen grid grid-cols-1 sm:grid-cols-2 ">
      <div className="w-full h-full ">
        <div className="bg-white h-full py-8 px-4 shadow  sm:px-10">
        <div className="">
        <h2 className="mt-6 text-3xl font-extrabold text-green-500">
          Cast Registration
        </h2>
        </div>
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
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-900"
              >
                Submit
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
      <div className=" hidden md:block bg-gradient-to-tr  from-[#243046] to-green-400/70">
        <img src={image[rand]}  alt="loginimage" className=" w-full h-full object-cover mix-blend-overlay "/>
      </div>
    </div>
  );
};

export default Signup;
