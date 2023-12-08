
import { useState } from "react";
import { useRouter } from "next/router";
import { menuList, userMenuList } from "@/constants";
import { GrFormClose } from "react-icons/gr";
import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const router = useRouter()
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };

  return (
    <nav className='w-full h-20 z-[999] sticky top-0 bg-background'>
      <div className='container mx-auto w-full h-full'>
        <div className='flex items-center justify-between w-full h-full px-4 lg:px-0'>
          {/* logo */}
          <div>
            <Link href='/'>
              <h1>
                Meet<span>Os</span>
              </h1>
            </Link>
          </div>

          {/* menuList */}
          <div className='hidden lg:flex items-center gap-8'>
            {menuList.map((list, index) => (
              <div className='flex items-center text-xl font-bold' key={index}>
                <ul>
                  <Link href={list.path}>
                    <li>{list.label}</li>
                  </Link>
                </ul>
              </div>
            ))}
              <Link href='/signup'>
                <button className='bg-secondary lg:w-[10rem] p-3 rounded-lg text-xl text-background hover:bg-background hover:text-primary border border-secondary duration-200 font-bold ease-in-out'>
                  Login / Register
                </button>
              </Link>
          </div>

          <div
            className='inline-block lg:hidden p-2 bg-secondary rounded-full text-black'
            onClick={handleChange}>
            {nav ? <GrFormClose size={30} /> : <BiMenuAltRight size={30} />}
          </div>

          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
            }>
            <Link href='/' onClick={handleChange}>
              <h1 className='text-background'>
                Meet<span>Os</span>
              </h1>
            </Link>
            <div className='flex flex-col items-center justify-center w-full h-full gap-10'>
              {menuList.map((link, index) => (
                <ul
                  key={index}
                  className='text-xl text-background'
                  onClick={handleChange}>
                  <Link
                    href={link.path}
                    className='text-background hover:text-secondary text-center duration-200'>
                    <li>{link.label}</li>
                  </Link>
                </ul>
              ))}

              <Link href='/login'>
                {" "}
                <button
                  className='bg-secondary text-background lg:w-[10rem] p-3 rounded-lg text-xl hover:bg-background hover:text-primary border border-secondary duration-200'
                  onClick={handleChange}>
                  Login
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
