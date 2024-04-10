import React from "react";
import Img from "../assets/img2.jpg";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="hero min-h-[60vh]">
      <div className="hero-content flex-col lg:flex-row">
        <img src={Img} className="rounded-lg shadow-2xl md:w-[25rem] h-[30rem]" data-aos="fade-right" />
        <div className="md:ml-12" data-aos="fade-left">
          <h1 className="text-2xl md:text-5xl font-bold leading-[140%]">
            Our Commitment: <br />
            Elevating the Standard of Residential Living
          </h1>
          <p className="py-6">
            Ready to find your dream home? Explore our website to browse our
            current listings, learn more about our services, and get in touch
            with our team. Whether you're a first-time home buyer or an
            experienced investor, we're here to help you every step of the way.
            Welcome to [VistaVillas] - where your journey to home ownership
            begins.
          </p>
          <Link to="/plans" className="btn bg-blue-600 text-white outline-none border-none">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
