import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <NavBar />
      <main className="container p-5 mx-auto h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
