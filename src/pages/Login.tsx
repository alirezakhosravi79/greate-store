import Button from "../components/Button"
import { useCartContext } from "../context/CartContext"

 
function Login() {

    const {handleLogin} = useCartContext()

  return (
    <div className="container px-6 py-4 text-white">
        <div className="bg-slate-300 p-12 rounded">
            <input type="text" placeholder="usename" className="px-4 py-2 text-center rounded-md"/>
            <input className="px-4 py-2 text-center rounded-md mx-3"
            type="password" placeholder="password"/>
            <Button onClick={handleLogin} className="ml-2 bg-purple-500 px-3 py-2 rounded hover:bg-black
            transition-all ease-in-out">
                Login
            </Button>
        </div>
    </div>
  )
}

export default Login