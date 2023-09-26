import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { BsFillPersonFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { UserAuth } from "../context/AuthContext";
import { resolve } from "styled-jsx/css";
import Image from "next/image";
const Navabar = () => {
  const menuList = [
    { label: "Home", path: "/" },
    { label: "Communities", path: "/communities" },
    { label: "About", path: "/about" },
  ];

  const [loading, setLoading] = useState(true);

  const { user, logOut } = UserAuth();
  // console.log(user);

  const [nav, setNav] = useState(false);
  const navChange = () => {
    setNav(!nav);
  };
  console.log(user);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-20 z-[999] sticky top-0 bg-background border-b border-secondary">
      <div className="flex items-center justify-between w-full h-full px-4 lg:px-16">
        <div>
          <Link href="/">
            <h3 className="text-secondary font-extrabold">MEETOS</h3>
          </Link>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {menuList.map((menu, index) => (
            <div key={index} className="text-lg text-secondary">
              <Link href={menu.path}>{menu.label}</Link>
            </div>
          ))}
        </div>

        {loading ? null : !user ? (
          <div className="hidden lg:flex items-center gap-5">
            <Link href="/signup">
              <Button className="w-[120px]">Sign Up</Button>
            </Link>

            <div className="rounded-full p-2 border border-secondary cursor-pointer">
              <BsFillPersonFill size={25} />
            </div>
          </div>
        ) : (
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}>
            <Image
              src={user.photoURL}
              width={50}
              height={50}
              alt={user.displayName}
              className="rounded-full border border-secondary"
            />
            {isOpen && (
              <div className="bg-white absolute top-20 flex flex-col items-center rounded-lg p-5 ">
                <Link href="/dashboard">
                  <p className="cursor-pointer text-lg">Dashboard</p>
                </Link>
                <p className="cursor-pointer text-lg">Your Events</p>
                <p className="cursor-pointer text-lg">Your Groups</p>
                <p className="cursor-pointer text-lg">View Profile</p>
                <Link href="/">
                  <p className="cursor-pointer text-lg" onClick={handleSignOut}>
                    Log Out
                  </p>
                </Link>
              </div>
            )}
          </div>
        )}

        <div className="flex lg:hidden">
          <BiMenuAltRight size={25} onClick={navChange} />
        </div>
      </div>
    </div>
  );
};

export default Navabar;
