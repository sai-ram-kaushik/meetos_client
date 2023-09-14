import React from "react";
import Image from 'next/image'
import communityImage from '../public/assets/images/community.svg'
const Hero = () => {
  return (
    <div className="w-full h-[90vh] bg-background p-3">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full h-full">
        <div className="flex flex-col gap-3 items-center lg:items-start">
          <h1 className="text-secondary font-extrabold">One More Friend</h1>
          <h2 className="text-secondary font-extrabold">Thousands More Fun!</h2>
          <p className="lg:w-[600px]">
            Meetos is a dynamic platform where tech enthusiasts and
            professionals come together to organize and attend technical
            meetups. It fosters connections within the tech community, offering
            a space for sharing knowledge, networking, and staying updated on
            industry trends. Whether you&apos;re a developer, designer, or tech
            enthusiast, Meetos provides a hub for collaborative learning and
            networking opportunities. Join us to explore, engage, and grow your
            tech skills!
          </p>
        </div>
        <div>
          <Image src={communityImage} width={600} height={600} alt="commuity_image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
