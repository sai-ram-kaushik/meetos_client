import Image from "next/image";
import { menuList } from "@/constants";
import { socials } from "@/constants";
import { AiOutlineMail } from "react-icons/ai";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full bg-footer p-5 py-5 mt-3">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <h1>
            Meet<span>Os</span>
          </h1>
        </div>

        <div className="p-8 border-t border-gray-800 border-b flex flex-wrap items-center gap-10 lg:gap-28 justify-center mt-10">
          <div className="flex items-center gap-3">
            <AiOutlineMail size={20} className="text-secondary" />
            <p>Community@meetos.com</p>
          </div>

          <div className="flex items-center gap-3">
            <TbDeviceLandlinePhone size={20} className="text-secondary" />
            <div className="flex flex-col items-start">
              <p>+91 987456321</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <BiPhoneCall size={20} className="text-secondary" />
            <p>+91 456789123</p>
          </div>

          <div className="flex items-center gap-3">
            <CiLocationOn size={20} className="text-secondary" />
              <p>Gurugram, India</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 mt-10">
          <div className="flex items-center gap-5">
            {socials.map((link) => (
              <div
                key={link.key}
                className="bg-secondary text-black rounded-full p-3">
                <a href={link.path} target="_blank">
                  <div className="text-background">{link.icon}</div>
                </a>
              </div>
            ))}
          </div>
          <div>
            <p>MeetOs. All Rights Reserved</p>
          </div>

          <div className="flex items-center gap-3">
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
