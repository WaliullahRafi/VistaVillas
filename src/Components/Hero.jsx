import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
        disableOnInteraction: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Autoplay]}
      className="mySwiper p-12"
    >
      <SwiperSlide>
        <div className="hero min-h-[60vh] rounded-2xl overflow-hidden bg-[url('./assets/img1.jpg')] bg-no-repeat bg-cover">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-[50rem]" data-aos="zoom-in">
              <h1 className="mb-5 text-2xl md:text-5xl font-bold leading-[140%]">
                VistaVillas: Navigating Quaint Residential Communities and Homes
              </h1>
              <p className="mb-5">
                For those seeking the allure of waterfront living, Coastal
                Charisma beckons, inviting you to experience the beauty of
                seaside splendor in residential real estate. Immerse yourself in
                the tranquility of lakeside luxuries, where every sunset is a
                celebration of natural beauty.
              </p>
              <Link
                to="/plans"
                className="btn bg-blue-600 text-white outline-none border-none"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero min-h-[60vh] rounded-2xl overflow-hidden bg-[url('./assets/img2.jpg')] bg-no-repeat bg-cover">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-[50rem]" data-aos="zoom-in">
              <h1 className="mb-5 text-2xl md:text-5xl font-bold leading-[140%]">
                VistaVillas: Immersing Yourself in the Beauty of Residential
                Life Amongst the Hills
              </h1>
              <p className="mb-5">
                Embrace the elegance of urban living with VistaVillas, where
                metropolitan majesty meets comfortable dwellings. Delve into our
                curated collection of homes that exude sophistication and style,
                offering an unparalleled urban experience
              </p>
              <Link
                to="/plans"
                className="btn bg-blue-600 text-white outline-none border-none"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="hero min-h-[60vh] rounded-2xl overflow-hidden bg-[url('./assets/img3.jpg')] bg-no-repeat bg-cover">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-[50rem]" data-aos="zoom-in">
              <h1 className="mb-5 text-2xl md:text-5xl font-bold leading-[140%]">
                VistaVillas: Exploring the Beauty and Grandeur of Alpine
                Residences
              </h1>
              <p className="mb-5">
                Explore the charm of village ventures with VistaVillas, <br />{" "}
                as we navigate through quaint residential communities and homes
                that embody the essence of neighborly warmth and community
                spirit
              </p>
              <Link
                to="/plans"
                className="btn bg-blue-600 text-white outline-none border-none"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Hero;
