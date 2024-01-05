"use client"
import Hero from './common/homepage/hero'
import Footer from './common/homepage/footer'
import Login from './common/login/login'
import { useAuth } from './hooks/authcard'
import Register from './common/register/register'

const page = () => {
  const { isLoginOpen, isRegisterOpen, openLogin, openRegister, closeModals } = useAuth();

  return (
    <div className='h-full w-full'>
   <Hero />
   <Footer />
   </div>
  )
}

export default page
