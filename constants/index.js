import { BsInstagram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
export const menuList = [
    {label: "About", path: "/about"},
    {label: "Communities", path: "/communities"},
]

export const userMenuList = [
    {label: "My Events", path: "/my-events"},
    {label: "Find Events", path: "/find-events"},
    {label: "Create Event", path: "/create-event"},
]


export const socials = [
    {
      label: "Instagram",
      icon: <BsInstagram size={20} />,
      key: "Instagram",
    },
    {
      label: "Facebook",
      icon: <FaFacebookF size={20} />,
      key: "facebook",
    },
    {
      label: "LinkedIn",
      icon: <AiFillLinkedin size={20} />,
      key: "LinkedIn",
    },
    {
      label: "Twitter",
      icon: <RiTwitterXFill size={20} />,
      key: "Twitter",
    },
  ];