import React from "react";
import Rev1 from "../assets/rev1.jpg";
import Rev2 from "../assets/rev2.jpg";
import Rev3 from "../assets/rev3.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Helmet } from "react-helmet";

function Review() {
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
      className="mySwiper"
    >
      <Helmet>
        <title>Review page</title>
      </Helmet>

      <SwiperSlide>
        <div className="flex items-center justify-center bg-base-200 p-20 gap-12">
          <div
            className="p-12 bg-base-100 text-center space-y-8"
            data-aos="fade-right"
          >
            <div className="w-[16rem] h-[20rem]">
              <img className="w-full h-full rounded-2xl" src={Rev1} alt="" />
            </div>
            <h2 className="text-xl font-semibold text-orange-600">
              Daniel Anderson
            </h2>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-700" data-aos="fade-down">
              Customer Reviews
            </h2>
            <div className="p-8 relative" data-aos="zoom-in">
              <FaQuoteLeft className="absolute left-0 top-0 text-2xl text-orange-600" />
              <p className="text-gray-600 font-medium">
                At its core, VistaVillas offers a sanctuary of comfort and
                serenity amidst the hustle and bustle of modern life, providing
                a refuge where individuals can retreat, recharge, and rejuvenate
                their spirits.
              </p>
              <FaQuoteRight className="absolute right-0 bottom-0 text-2xl text-orange-600" />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center justify-center bg-base-200 p-20 gap-12">
          <div
            className="p-12 bg-base-100 text-center space-y-8"
            data-aos="fade-right"
          >
            <div className="w-[16rem] h-[20rem]">
              <img className="w-full h-full rounded-2xl" src={Rev2} alt="" />
            </div>
            <h2 className="text-xl font-semibold text-orange-600">
              Michael Smith
            </h2>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-700" data-aos="fade-down">
              Customer Reviews
            </h2>
            <div className="p-8 relative" data-aos="zoom-in">
              <FaQuoteLeft className="absolute left-0 top-0 text-2xl text-orange-600" />
              <p className="text-gray-600 font-medium">
                From Mediterranean-inspired villas adorned with intricate
                detailing to sleek modernist residences characterized by clean
                lines and expansive windows, every property within the
                VistaVillas portfolio is a masterpiece of design, craftsmanship,
                and luxury.
              </p>
              <FaQuoteRight className="absolute right-0 bottom-0 text-2xl text-orange-600" />
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex items-center justify-center bg-base-200 p-20 gap-12">
          <div
            className="p-12 bg-base-100 text-center space-y-8"
            data-aos="fade-right"
          >
            <div className="w-[16rem] h-[20rem]">
              <img className="w-full h-full rounded-2xl" src={Rev3} alt="" />
            </div>
            <h2 className="text-xl font-semibold text-orange-600">
              Sophia Rodriguez
            </h2>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-700" data-aos="fade-down">
              Customer Reviews
            </h2>
            <div className="p-8 relative" data-aos="zoom-in">
              <FaQuoteLeft className="absolute left-0 top-0 text-2xl text-orange-600" />
              <p className="text-gray-600 font-medium">
                From the charming Victorian-era homes adorned with ornate
                detailing to the minimalist modernist dwellings characterized by
                clean lines and open spaces, every residential house reflects
                the aspirations, values, and aesthetic sensibilities of its
                inhabitants.
              </p>
              <FaQuoteRight className="absolute right-0 bottom-0 text-2xl text-orange-600" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Review;
