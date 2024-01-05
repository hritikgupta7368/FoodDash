"use client"
import { useAuth } from "@/app/hooks/authcard";

const Login = () => {

    const { isLoginOpen, isRegisterOpen, openLogin, openRegister, closeModals } = useAuth();
  return (
    <div className='absolute h-full w-80 bg-green-400 z-10 right-0'>
        <h1>Login</h1>
        <button>or create a new account</button>
        <input type = "number" placeholder='enter your phone no.' />
        <button type = "submit" >Submit </button>
        <button onClick = {() => {closeModals()}}>return </button>
    </div>
  )
}

export default Login
