import React from "react";
import Image from "next/image";
import Button from "../components/Button";
const Join_Community = () => {
  const communities = [
    { label: "The Frontend Club", photo: "/assets/images/tfc.png", path: "#" },
    { label: "The Frontend Club", photo: "/assets/images/tfc.png", path: "#" },
    { label: "The Frontend Club", photo: "/assets/images/tfc.png", path: "#" },
  ];

  return (
    <div className="w-full py-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center">
          <h3>Join Communities</h3>
        </div>

        <div className="flex flex-wrap gap-5 items-center justify-center py-5">
          {communities.map((community, index) => (
            <div
              key={index}
              className="min-w-[10rem] max-w-[16rem] bg-background rounded-lg flex flex-col items-center justify-center shadow-md p-3">
              <div className="flex flex-col items-center gap-5">
                <Image
                  src={community.photo}
                  alt={community.label}
                  width={100}
                  height={100}
                />
                <h4>{community.label}</h4>
                <Button>Join Now!</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Join_Community;
