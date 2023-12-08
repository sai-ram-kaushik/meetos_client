import Image from "next/image";
import React from "react";
import aboutVector from "@/public/assets/aboutMeetOs.png";
const WhatIsMeetOs = () => {
  return (
    <div className="w-full p-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>
            What is Meet<span>Os</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center mt-16 justify-center gap-16">
          <div>
            <Image
              src={aboutVector}
              alt="aboutPageVector"
              width={500}
              height={500}
            />
          </div>

          <div className="flex items-center justify-center">
            <p className="lg:w-[40rem] text-2xl font-medium">
              Welcome to Meetos, the ultimate hub for seamless connections! At
              Meetos, we&apos;ve crafted a platform designed to effortlessly bring
              people together from all walks of life. Whether you&apos;re seeking
              like-minded individuals, professional networks, or simply new
              friends, our user-friendly interface and innovative features make
              connecting a breeze. Join us to explore a world where forging
              meaningful connections is not just easy, but delightful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsMeetOs;
