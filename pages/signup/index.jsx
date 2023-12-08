"use client";
import React, { useState } from "react";
import login_vector from "@/public/assets/login-vector.svg";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import TransitionEffect from "@/components/TransitionEffect";
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch('api/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };


  return (
    <div className='w-full h-[80vh] p-5 lg:p-0'>
      <TransitionEffect />
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

            <form
              className='flex flex-col items-start gap-5'
              onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Username'
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type='email'
                placeholder='Email Id'
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className='bg-secondary lg:w-[10rem] p-3 rounded-lg text-xl text-background hover:bg-background hover:text-primary border border-secondary duration-200 font-bold ease-in-out'>
                Register
              </button>

              {error && (
                <div className='bg-red-500 text-background w-fit text-sm py-1 px-3 rounded-md mt-2'>
                  {error}
                </div>
              )}
            </form>

            <div className='flex items-center justify-center'>
              <p className='text-2xl'>
                Already have a account?{" "}
                <Link href='/login' className='text-secondary'>
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
