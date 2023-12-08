import Image from "next/image"
import homePageVector from '@/public/assets/homePage.svg'
import TransitionEffect from "@/components/TransitionEffect"
const HomePage = () => {
  return (
    <section className="w-full lg:h-[80vh] p-5">
      <TransitionEffect />
      <div className="container mx-auto w-full h-full">
        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-16 justify-center md:justify-between w-full h-full bg-primary rounded-[10rem] p-10">
          <div className="flex flex-col gap-5 lg:w-[70rem]">
            <h3 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl text-justify lg:text-start leading-[2.5rem] lg:leading-[4.5rem] font-semibold text-background"><span>Meetos:</span> Where tech lovers unite, sparking innovation in shared passion</h3>
            <p className="text-[16px] lg:text-[18px] xl:text-[24px] text-justify text-background">Networking at in-person meetups can be challenging. Our solution provides a list of registered attendees nearby, allowing for easy access to their professional social profiles for improved connections</p>
            <button className="lg:w-[12rem] text-background font-bold bg-secondary p-3 rounded-xl text-xl hover:bg-background hover:text-primary border border-secondary duration-200">Join Communities</button>
          </div>

          <div>
            <Image src={homePageVector} alt="homePage_vector" priority  />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage