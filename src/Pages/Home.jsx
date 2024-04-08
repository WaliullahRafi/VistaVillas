import React from "react";
import Hero from "../Components/Hero";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="-z-10">
      <Helmet>
        <title>VistaVillas | Home - page</title>
      </Helmet>
      <Hero />
    </div>
  );
}

export default Home;
