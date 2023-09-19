import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsPersonWorkspace,
} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { TbPassword } from "react-icons/tb";
import signup from "../../public/assets/images/signup.svg";
import Button from "../../components/Button";
import TransitionEffect from "../../components/TransitionEffect";
const index = () => {
  return (
    <>
      <TransitionEffect />
      <div className="w-full py-10 p-3">
        <div className="flex items-center justify-center">
          <div className="container mx-auto flex items-center justify-center bg-primary shadow-lg p-5">
            <div className="flex flex-col lg:flex-row items-center gap-20">
              <form className="flex flex-col items-center lg:items-start gap-5 text-secondary">
                <h3>Sign Up</h3>
                <div className="flex items-center gap-2 border rounded-lg p-3 border-secondary text-lg">
                  <BsFillPersonFill size={25} />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="outline-none w-[230px] lg:w-[300px]"
                  />
                </div>

                <div className="flex items-center gap-2 border rounded-lg p-3 border-secondary text-lg">
                  <AiOutlineMail size={25} />
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="outline-none w-[230px] lg:w-[300px]"
                  />
                </div>

                <div className="flex items-center gap-2 border rounded-lg p-3 border-secondary text-lg">
                  <BsFillTelephoneFill size={25} />
                  <input
                    type="text"
                    placeholder="Your Number"
                    className="outline-none w-[230px] lg:w-[300px]"
                  />
                </div>

                <div className="flex items-center gap-2 border rounded-lg p-3 border-secondary text-lg">
                  <BsPersonWorkspace size={25} />
                  <input
                    type="text"
                    placeholder="Your Profession"
                    className="outline-none w-[230px] lg:w-[300px]"
                  />
                </div>

                <div className="flex items-center gap-2 border rounded-lg p-3 border-secondary text-lg">
                  <TbPassword size={25} />
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="outline-none w-[230px] lg:w-[300px]"
                  />
                </div>

                <div className="flex items-center gap-2 border rounded-lg p-3 border-secondary text-lg">
                  <TbPassword size={25} />
                  <input
                    type="password"
                    placeholder="Enter confirmation Password"
                    className="outline-none w-[230px] lg:w-[300px]"
                  />
                </div>

                <button className="p-2 rounded-lg bg-secondary border border-secondary text-primary w-[120px]">
                  Register
                </button>

                <div>
                  <p className="text-2xl">---OR---</p>
                </div>

                <div className="flex flex-col items-center gap-3">
                  <button className="flex items-center gap-3 text-xl border border-secondary p-3 rounded-lg hover:text-primary hover:bg-secondary duration-200">
                    <FcGoogle size={25} />
                    Signup with Google
                  </button>
                </div>
              </form>
              <div>
                <Image src={signup} alt="signup" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
