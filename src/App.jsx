import VerifyOTP from "./pages/Verify";
import  Home from "./pages/Home"
import LoginPage from "./pages/Login"
import ProfilePage from "./pages/Myprofile"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./Context/AuthContext";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import RootLayout from "./componets/RootLayout";
import About from "./componets/About";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Detail from "./pages/Detail";
import How from "./componets/How";
import AdminDashboard from "./pages/Admin"
import Usermanagment from "./pages/Usermanagment"
import ErrorPage from "./pages/error-page";
import AdminLayout from "./componets/AdminLayout";
import Order from "./componets/Order";
import Custome from "./componets/Custome";
import { ShoppingCartProvider } from "./Context/CartContext";
import {QueryClientProvider,QueryClient} from 'react-query'
const router = createBrowserRouter(
  createRoutesFromElements(
<Route>
<Route path="/" element={<RootLayout/>}  errorElement={<ErrorPage />}>
 <Route index element={<Home/>}/>
 <Route path="about" element={<About/>}/>
 <Route path="/detail" element={<Detail/>}/>
 <Route path="/login" element={<LoginPage/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/how" element={<How/>}/>
<Route path="/custome" element={<Custome/>}/>
<Route path="/verify" element={<VerifyOTP/>}/>
<Route path="/myprofile" element={<ProfilePage/>}/>

</Route>
<Route path="/admin" element={<AdminLayout/>}>
  <Route index element={<AdminDashboard/>}/>
  <Route path="user" element={<Usermanagment/>}/>
  <Route path="order"element={<Order/>}/>
</Route>
</Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
    <ShoppingCartProvider>
<RouterProvider router={router}/>
<ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
  </ShoppingCartProvider>
  </AuthProvider>
  )
}

export default App