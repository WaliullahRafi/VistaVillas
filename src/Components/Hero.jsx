import React from "react";

function Hero() {
  return (
    <div
      className="hero min-h-[60vh] rounded-2xl overflow-hidden bg-[url('./assets/hero.jpg')] bg-no-repeat bg-cover"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-[50rem]">
          <h1 className="mb-5 text-5xl font-bold leading-[140%]">"VistaVillas: Exploring the Beauty and Grandeur of Alpine Residences"</h1>
          <p className="mb-5">
          For those seeking the allure of waterfront living, VistaVillas, inviting you to experience the beauty of seaside splendor in residential real estate. Immerse yourself in the tranquility of lakeside luxuries, where every sunset is a celebration of natural beauty.
          </p>
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
