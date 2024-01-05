"use client"
import { useRouter } from "next/navigation"

const Hero = () => {
  const router  = useRouter()

  function handleSelectCity(event){
    const selecetdCity = event.target.value
    router.push(`/api/city/${selecetdCity}`)

  }

  return (
    <div className='bg-red-400 w-full h-[60%]'>
      <div className='flex flex-row justify-between'>
        <div className='bg-white w-52 h-52'>
        <div>fooddash -order to your doorsteps</div>
        <button>Register-now</button>
        </div>
        <div className='bg-white w-52 h-52'>
          <h1>select your city</h1>
          <select onChange = {handleSelectCity}>
            <option value = "delhi">delhi</option>
            <option value = "gurgaon">gurgaon</option>
            <option value = "mumbai">mumbai</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Hero
