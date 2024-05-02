"use client"

import { RiMenu3Line } from "react-icons/ri";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi2";
import { navLinks } from "@/utils/navLinks";
import Link from "next/link";
const Navbar = () => {
    
  return (
    <>
      <div className="w-full  h-[102px] bg-gray-900 flex items-center justify-between px-[16px] py-[40px] pb-[14px] relative  z-20 lg:h-[98px] lg:px-[80px] lg:py-[24px]">
        <div className="w-[116.08px] h-[35px] ">
          <p className="text-white">logo</p>
        </div>
        <div className="hidden xl:flex w-[426px] h-[61px] px-[30px] py-[8px] items-center justify-around absolute right-[506px] top-[18px] rounded-[10px] bg-[#0F0F0F]  border-[3px] border-[#1F1F1F]">
          {navLinks &&
            navLinks.map((links, i) => (
                <Link key={i} href={links.path}>
              <div  className="" >
                <p className="text-[14px] text-[#BFBFBF] leading-relaxed cursor-pointer">
                  {links.title}
                </p>
              </div>
              </Link>
            ))}
            
        </div>
        <div className="hidden lg:flex w-[62px] h-[24px]  items-center gap-[14px] ">
          <HiOutlineSearch className="w-[24px] h-[24px] text-[#ffff] " />
          <HiOutlineBell className="w-[24px] h-[24px] text-[#ffff]" />
        </div>
        {/* mobile things */}
        <div className="w-[48px] h-[48px] rounded-[6px] bg-[#262626] p-[12px] lg:hidden">
          <RiMenu3Line className="text-white w-[24px] h-[24px] " />
        </div>
        {/*end*/}
      </div>
    </>
  );
};

export default Navbar;
