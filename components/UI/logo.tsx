

import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-end">
      <Image src={"/logo.png"} alt="logo" width={100} height={80}/>
      <div className="hidden md:flex flex-col font-bold text-lg leading-none uppercase">
        <span className="leading-none text-[#F9E603]">Formula one</span>
        <span className="leading-none tracking-widest">Properties</span>
      </div>
    </div>
  );
};