import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/footer";
import Home from "../Pages/home";
import Navbar from "../Pages/Shared/Navbar/navbar";

const Main = () => {
  return (
    <div>
      <div className="sticky top-0 z-10 opacity-70 font-bold">
        <Navbar></Navbar>
      </div>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
