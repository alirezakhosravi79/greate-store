import { Navigate, Outlet } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

function PrivateRoute() {
    const {isLogin} = useCartContext()
  return (
    <>
     {
        isLogin ? <Outlet /> : <Navigate  to='/login'/> 
     }
    </>
  )
}

export default PrivateRoute