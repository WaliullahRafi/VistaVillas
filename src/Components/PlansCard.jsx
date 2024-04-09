import React from "react";
import { FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PlansCard({ plan }) {
  const { id, cover_image, estate_title, segment_name, price, location } = plan;

  return (
    <div className="py-4 space-y-4 p-4 rounded-2xl border-[1px] border-orange-600" data-aos="zoom-in">
      <img className="w-full md:h-[15rem] rounded-xl" src={cover_image} alt="" />
      <div className="lg:flex items-center gap-8">
        <h3 className="text-xl font-semibold text-gray-400 flex items-center gap-1">
          <FaDollarSign className="text-orange-600" />
          {price}
        </h3>
        <span className="font-medium btn btn-sm bg-gray-600 text-white mt-4 lg:mt-0">
          {segment_name}
        </span>
      </div>
      <h2 className="text-xl font-bold">{estate_title}</h2>
      <div className="flex items-center justify-between">
        <span className="font-medium">
          Location: <br />
          {location}
        </span>
        <Link
          to={`/plans/view-property/${id}`}
          className="btn bg-gray-600 text-white"
        >
          View Property
        </Link>
      </div>
    </div>
  );
}

export default PlansCard;
