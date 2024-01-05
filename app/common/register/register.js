"use client"
import { useAuth } from "@/app/hooks/authcard";
const Register = () => {

    const { isLoginOpen, isRegisterOpen, openLogin, openRegister, closeModals } = useAuth();
  return (
    <div className='absolute h-full w-80 bg-green-400 z-10 right-0'>
        <h1>Register</h1>
        <button>or login with existing one</button>
        <input type = "number" placeholder='enter your phone no.' />
        <input type = "text" placeholder='enter your name' />
        <input type = "email" placeholder='enter your name' />
        <button type = "submit" >Submit </button>
        <button onClick = {() => {closeModals()}}>return </button>
    </div>
  )
}

export default Register
