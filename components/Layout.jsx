import React from "react";
import Head from "next/head";
import Navabar from "../sections/Navabar";
import Footer from "../sections/Footer";
import TransitionEffect from "./TransitionEffect";
import { AuthContextProvider } from "../context/AuthContext";
const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>MeetOs</title>
      </Head>

      <AuthContextProvider>
        <TransitionEffect />
        <div className="min-h-screen flex flex-col">
          <Navabar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </AuthContextProvider>
    </div>
  );
};

export default Layout;
