import Image from "next/image"

const Card = ({restaurant,rating,category,location}) => {
  return (
    <div className='m-2 bg-yellow-200 h-[300px] w-[400px] rounded-2xl'>
        <Image src= {``} height={200} width={550} className="rounded-2xl"/>
        <div className="w-full">{restaurant}</div>
        <div className="w-full">{rating}</div>
        <div className="w-full">{category}</div>
        <div className="w-full">{location}</div>
      
    </div>
  )
}

export default Card
