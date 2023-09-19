import React from "react";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";
import { BiTimeFive } from "react-icons/bi";
const UpcomingEvents = () => {
  const Events = [
    {
      label: "Social Meetup on this saturday",
      host: "The Frontend Club",
      date: "16/09/2023",
      time: "10:00AM",
      photo: "/assets/images/meetup.webp",
    },
    {
      label: "Social Meetup on this saturday",
      host: "The Frontend Club",
      date: "16/09/2023",
      time: "10:00AM",
      photo: "/assets/images/meetup1.webp",
    },
    {
      label: "Social Meetup on this saturday",
      host: "The Frontend Club",
      date: "16/09/2023",
      time: "10:00AM",
      photo: "/assets/images/meetup.webp",
    },
    {
      label: "Social Meetup on this saturday",
      host: "The Frontend Club",
      date: "16/09/2023",
      time: "10:00AM",
      photo: "/assets/images/meetup1.webp",
    },
    
  ];

  return (
    <div className="w-full py-10">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <h3>Upcoming Events</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 py-10 cursor-pointer">
          {Events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col items-center lg:items-start justify-center gap-3 min-w-[10rem] max-w-[16rem]">
              <Image
                src={event.photo}
                width={300}
                height={300}
                alt={event.label}
                className="rounded-lg"
              />
              <h4>{event.label}</h4>
              <p className="text-gray-500">Hosted by: {event.host}</p>
              <div className="flex items-center gap-3 text-gray-500">
                <p className="flex items-center gap-2">
                  <SlCalender size={15} /> {event.date}
                </p>
                <p className="flex items-center gap-2">
                  <BiTimeFive size={15} /> {event.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
