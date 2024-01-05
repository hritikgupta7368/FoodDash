import Image from "next/image";
import React from "react";

const Banner = ({ city }) => {
  return (
    <div className="bg-purple-300 flex flex-row justify-around items-center rounded-b-3xl">
      <div className="  text-6xl font-bold text-wrap text-slate-700 w-[300px] h-[250px]">Order Food Online in {city}</div>
      <Image src="/product/header.avif" className="" height={500} width={545} />
    </div>
  );
};

export default Banner;
