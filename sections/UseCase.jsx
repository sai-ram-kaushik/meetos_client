import React, { useState, useTransition } from "react";
import TabButton from "@/components/TabButton";
const UseCase = () => {
  const [tab, setTab] = useState("Group Engagement");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const Product_Tab_Data = [
    {
      title: "Group Engagement",
      id: "Group Engagement",
      content: (
        <div className="flex items-center justify-center mt-5">
          <p className="w-[40rem] text-2xl">
            Meetos provides a dedicated space for professionals to join
            industry-specific groups. Users can actively participate in
            discussions, share insights, and collaborate with like-minded
            individuals, fostering a vibrant community within their professional
            niche.
          </p>
        </div>
      ),
    },

    {
      title: "Event Participation",
      id: "Event Participation",
      content: (
        <div className="flex items-center justify-center mt-5">
          <p className="w-[40rem] text-2xl">
            Professionals can seamlessly attend virtual events hosted on Meetos,
            ranging from conferences to workshops. These events serve as
            valuable platforms for networking, knowledge exchange, and staying
            updated on industry trends, contributing to continuous professional
            development.
          </p>
        </div>
      ),
    },

    {
      title: "Career Exploration",
      id: "Career Exploration",
      content: (
        <div className="flex items-center justify-center mt-5">
          <p className="w-[40rem] text-2xl">
            Meetos facilitates career growth by connecting users with relevant
            opportunities within their industry. Whether it&apos;s job openings,
            mentorship programs, or collaborative projects, professionals can
            explore and leverage these avenues to enhance their career
            trajectories.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full p-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h3>
            Uses Cases of Meet<span>Os</span>
          </h3>
        </div>
        <div className="flex items-center justify-center gap-5 mt-10">
          <TabButton
            selectTab={() => handleTabChange("Group Engagement")}
            active={tab === "Group Engagement"}>
            Group Engagement
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Event Participation")}
            active={tab === "Event Participation"}>
            Event Participation
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("Career Exploration")}
            active={tab === "Career Exploration"}>
            Career Exploration
          </TabButton>
        </div>
        <div>{Product_Tab_Data.find((t) => t.id === tab).content}</div>
      </div>
    </div>
  );
};

export default UseCase;
