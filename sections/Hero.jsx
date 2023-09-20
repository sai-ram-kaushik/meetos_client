import Image from "next/image";
import React from "react";
import community from "../public/assets/images/community.svg";
import Button from "../components/Button";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="py-10 w-full bg-background rounded-bl-[40px] rounded-br-[40px] p-3">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full h-full">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <div className="flex flex-col items-center lg:items-start">
            <h1>One More Friend</h1>
            <h2>Thousands More Fun!</h2>
          </div>

          <p className="lg:w-[500px] text-center lg:text-start">
            <b className="text-secondary">MeetOs</b> is a platform connecting
            tech enthusiasts for technical meetups, fostering knowledge sharing
            and networking within the industry. Join us to expand your tech
            horizons.
          </p>

          <div className="flex items-center gap-3">
            <button className="border border-secondary p-3 rounded-full">
              View Intro
            </button>
            <Link href="/dashboard">
              <Button>Explore Now</Button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={community}
            alt="community image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
