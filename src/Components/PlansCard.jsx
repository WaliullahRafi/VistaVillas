import React from "react";
import { FaDollarSign } from "react-icons/fa6";

function PlansCard({ plan }) {
  const { id, cover_image, estate_title, segment_name, price, location } = plan;

  return (
    <div className="py-4 space-y-4 p-4 rounded-2xl border-[1px] border-gray-300">
      <img className="w-full h-[15rem] rounded-xl" src={cover_image} alt="" />
      <div className="flex items-center gap-8">
        <h3 className="text-xl font-semibold text-orange-600 flex items-center gap-1">
          <FaDollarSign className="text-black" />
          {price}
        </h3>
        <span className="font-medium btn btn-sm bg-orange-600 text-white">
          {segment_name}
        </span>
      </div>
      <h2 className="text-xl font-bold">{estate_title}</h2>
      <div className="flex items-center justify-between">
        <span className="font-medium">Location: {location}</span>
        <button className="btn btn-primary">View Property</button>
      </div>
    </div>
  );
}

export default PlansCard;