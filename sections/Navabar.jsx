import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/Button";
import { BsFillPersonFill } from "react-icons/bs";
import {BiMenuAltRight} from 'react-icons/bi'
const Navabar = () => {
  const menuList = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
  ];
  const [nav, setNav] = useState(false)
  const handleChange = () => {
    setNav(!nav)
    console.log('clicked')
  }
  return (
    <div className="w-full h-20 z-[999] sticky -top-0 bg-background">
      <div className="flex items-center justify-between w-full h-full px-4 lg:px-16">
        <div>
          <h3 className="text-secondary font-extrabold">MEETOS</h3>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {menuList.map((menu, index) => (
            <div key={index} className="text-lg text-secondary">
              <Link href={menu.path}>{menu.label}</Link>
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <Button>Join the Communities</Button>
          <div className="rounded-full p-2 border border-secondary cursor-pointer">
            <BsFillPersonFill size={25} />
          </div>
        </div>

        <div className="flex lg:hidden">
            <BiMenuAltRight size={25} onClick={handleChange} />
        </div>
      </div>
    </div>
  );
};

export default Navabar;
