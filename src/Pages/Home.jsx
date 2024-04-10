import React from "react";
import Hero from "../Components/Hero";
import Plans from "./Plans";
import AboutUs from "./AboutUs";
import Review from "./Review";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="px-4">
      <Helmet>
        <title>VistaVillas | Home page</title>
      </Helmet>
      <Hero />
      <Plans />
      <Review />
      <AboutUs />
    </div>
  );
}

export default Home;
