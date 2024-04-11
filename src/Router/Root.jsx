import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function Root() {
  const location = useLocation();

  return (
    <div className="max-w-[1400px] mx-auto">
      <Helmet>
        <title>{location?.pathname}</title>
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Root;
