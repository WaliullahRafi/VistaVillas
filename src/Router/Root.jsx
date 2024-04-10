import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
AOS.init();

function Root() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="max-w-[1400px] mx-auto">
      <Helmet>
        <title>{location?.pathname}</title>
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
