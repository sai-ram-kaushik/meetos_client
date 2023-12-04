import Navbar from "@/sections/Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Meetos - A Meetup Companion</title>
      </Head>

      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
};

export default Layout;
