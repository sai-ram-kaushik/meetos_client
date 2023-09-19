import React from "react";
import Button from "../components/Button";
import Image from "next/image";
import join_meetup from '../public/assets/images/join_meetup.webp'
const Container = () => {
  return (
    <div className="w-full py-10 p-3">
      <div className="container mx-auto flex flex-wrap items-center justify-center bg-background p-5 rounded-xl">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex flex-col items-center lg:items-start gap-3">
            <h3>Join Meetup</h3>
            <p className="lg:w-[800px]">
              People use Meetup to meet new people, learn new things, find
              support, get out of their comfort zones, and pursue their
              passions, together. Membership is free.
            </p>
            <Button className="w-[120px]">Sign Up</Button>
          </div>

          <div>
            <Image src={join_meetup} alt="join_meetup" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
