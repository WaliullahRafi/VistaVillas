import React from "react";
import Hero from "../Components/Hero";
import { Helmet } from "react-helmet";
import Plans from "./Plans";
import AboutUs from "./AboutUs";
import Review from "./Review";

function Home() {
  return (
    <div>
      {/* <Helmet>
        <title>VistaVillas | Home - page</title>
      </Helmet> */}
      <Hero />
      <Plans />
      <Review />
      <AboutUs />
    </div>
  );
}

export default Home;
