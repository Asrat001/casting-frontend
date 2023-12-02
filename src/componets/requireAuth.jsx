import { useLocation,Navigate ,Outlet } from "react-router-dom";

    const RequireAuth =()=>{

        const user = JSON.parse(sessionStorage.getItem('user'));
       
        const location=useLocation()
        console.log( location.pathname,'heu')
       
        return (
          user ? <Navigate to={location.pathname}  />:<Navigate to='/login' state={{from:location}} replace/>
        )
    }
    const RequireAdminAuth=()=>{
        const user = JSON.parse(sessionStorage.getItem('user'));
        const location=useLocation()
        return (
            user?.isAdmin ? <Navigate to='/admin' state={{from:location}} replace />:<Navigate to='/' state={{from:location}} replace/>
          )
    }

    export  {RequireAuth,RequireAdminAuth}