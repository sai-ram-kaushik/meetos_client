"use client";
import React, { useState } from "react";
import login_vector from "@/public/assets/login-vector.svg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { axios } from "axios";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const router = useRouter()
  const onSignUp = async () => {
    try{

    } catch(error){
        console.log("signup failed", error.message)
        toast.error(error.message)
    }
  };
  return (
    <div className='w-full h-[80vh] p-5 lg:p-0'>
      <div className='container mx-auto w-full h-full'>
        <div className='flex items-center justify-center w-full h-full'>
          <div className='flex flex-col items-center gap-10'>
            <h3>Create an Account</h3>
            <div className='flex flex-col lg:flex-row items-center gap-5'>
              <div className='flex items-center gap-3 text-2xl border border-primary p-3 rounded-xl cursor-pointer hover:shadow-xl'>
                <FcGoogle size={30} />
                <p>Google</p>
              </div>

              <div className='flex items-center gap-3 text-2xl border border-primary p-3 rounded-xl cursor-pointer hover:shadow-xl'>
                <FaGithub size={30} />
                <p>GitHub</p>
              </div>
            </div>

            <div className='flex items-center justify-center'>
              <p className='text-2xl sm:text-2xl lg:text-3xl'>-OR-</p>
            </div>

            <div className='flex flex-col items-start gap-5'>
              <input
                type='text'
                placeholder='Username'
                className='lg:min-w-[533px] p-5 text-xl lg:text-2xl bg-transparent border-b cursor-pointer'
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
              <input
                type='email'
                placeholder='Email Id'
                className='lg:min-w-[533px] p-5 text-xl lg:text-2xl bg-transparent border-b cursor-pointer'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <input
                type='password'
                placeholder='Password'
                className='lg:min-w-[533px] p-5 text-xl lg:text-2xl bg-transparent border-b cursor-pointer'
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <button className='bg-secondary lg:w-[10rem] p-3 rounded-lg text-xl text-background hover:bg-background hover:text-primary border border-secondary duration-200 font-bold ease-in-out' onClick={onSignUp}>
                Register
              </button>
            </div>

            <div className="flex items-center justify-center">
            <p className='text-2xl'>Already have a account? <Link href="/login" className="text-secondary">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
