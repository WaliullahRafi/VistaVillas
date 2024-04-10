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

      <SwiperSlide>
        <div className="grid md:grid-cols-2 items-center justify-center p-20 h-[70vh] w-full text-center my-14 my:mt-0" data-aos="zoom-in">
          <div className="space-y-6 flex flex-col items-center justify-center w-full p-12 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden border-none">
              <img src={Rev1} alt="" />
            </div>
            <h2 className="mt-8 md:mt-0 text-xl md:text-3xl font-bold text-gray-600">
              Customer Reviews
            </h2>
            <h3 className="text-xl md:text-3xl text-gray-600 font-bold">
              User Name
            </h3>

            <div className="p-8 relative">
              <FaQuoteLeft className="absolute left-0 top-0 text-2xl text-orange-600" />
              <p className="text-gray-600 md:font-medium">
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

      <SwiperSlide>
        <div className="grid md:grid-cols-2 items-center justify-center p-20 h-[70vh] w-full text-center my-14 my:mt-0" data-aos="zoom-in">
          <div className="space-y-6 flex flex-col items-center justify-center w-full p-12 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden border-none">
              <img src={Rev2} alt="" />
            </div>
            <h2 className="mt-8 md:mt-0 text-xl md:text-3xl font-bold text-gray-600">
              Customer Reviews
            </h2>
            <h3 className="text-xl md:text-3xl text-gray-600 font-bold">
              User Name
            </h3>

            <div className="p-8 relative">
              <FaQuoteLeft className="absolute left-0 top-0 text-2xl text-orange-600" />
              <p className="text-gray-600 md:font-medium">
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

      <SwiperSlide>
        <div className="grid md:grid-cols-2 items-center justify-center p-20 h-[70vh] w-full text-center my-14 my:mt-0" data-aos="zoom-in">
          <div className="space-y-6 flex flex-col items-center justify-center w-full p-12 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="w-[7rem] h-[7rem] rounded-full overflow-hidden border-none">
              <img src={Rev3} alt="" />
            </div>
            <h2 className="mt-8 md:mt-0 text-xl md:text-3xl font-bold text-gray-600">
              Customer Reviews
            </h2>
            <h3 className="text-xl md:text-3xl text-gray-600 font-bold">
              User Name
            </h3>

            <div className="p-8 relative">
              <FaQuoteLeft className="absolute left-0 top-0 text-2xl text-orange-600" />
              <p className="text-gray-600 md:font-medium">
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
