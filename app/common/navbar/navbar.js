"use client";
import { useRouter } from "next/navigation";
import { useLogin } from "@/app/hooks/login";
import Search from "../search/search";
import { useAuth } from "@/app/hooks/authcard";

const Navbar = () => {
  const router = useRouter();
  const { isLoggedIn, login, logout } = useLogin();
  const { isLoginOpen, isRegisterOpen, openLogin, openRegister, closeModals } = useAuth();

  return (
    <div className="bg-red-200 w-full h-[10%] flex flex-row justify-between items-center px-4 text-2xl sticky">
      <button onClick={() => router.push('/')}>Logo</button>
      <div className="flex flex-row gap-2">
        {isLoggedIn ? <Search />:<button onClick={() =>{router.push("/api/search")}}>Search</button>}
        {isLoggedIn ? <button>Restaurants</button>:''}
        <button>about us</button>
        {/* {isLoggedIn ? <div onClick={() =>{logout()}}>Avatar</div>:<button onClick={() => {login()}}>login/register</button>} */}
        <button onClick={() => {openLogin()}} className="bg-black text-white font-semibold text-xl w-20">Login</button>
        <button onClick={() => {openRegister()}} className="bg-black text-white font-semibold text-xl w-20">Register</button>
        <button>cart</button>
      </div>
    </div>
  );
};

export default Navbar;
