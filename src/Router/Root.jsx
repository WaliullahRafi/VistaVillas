import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Root() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
