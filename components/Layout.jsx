import React from "react";
import Head from "next/head";
import Navabar from "../sections/Navabar";
import Footer from "../sections/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>MeetOs</title>
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navabar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
