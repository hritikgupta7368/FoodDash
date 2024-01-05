import Banner from '@/app/common/product/banner'
import Hero from '@/app/common/product/hero'
import React from 'react'

const Page = ({params}) => {
    const city = params.city
  return (
   <main className='h-screen w-screen '>
    <div className='h-[40%] '><Banner city = {city} /></div>
    <div className='w-full h-full'>
    <Hero city = {city}/>
    </div>

   </main>
  )
}

export default Page
