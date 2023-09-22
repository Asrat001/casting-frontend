
import  Home from "./pages/Home"
import LoginPage from "./pages/Login"

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
<Route path="/" element={<RootLayout/>}>
 <Route index element={<Home/>}/>
 <Route path="about" element={<About/>}/>
 <Route path="/detail" element={<Detail/>}/>
</Route>
<Route path="/login" element={<LoginPage/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/how" element={<How/>}/>
</>
  )
);

const App = () => {
  return (
    <div className="" >
<RouterProvider router={router}/>
    </div>
  )
}

export default App