import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";

function ViewProperty() {
  const { id } = useParams();
  const [plans, setPlans] = useState({});
  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch("/residential.json")
      .then((res) => res.json())
      .then((data) => {
        setPlans(data);

        const single = data.find((item) => item.id === +id);
        setDetails(single);
      });
  }, []);

  const {
    id: planID,
    cover_image,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = details;

  return (
    <div className="py-4 space-y-4 p-4 rounded-2xl border-[1px] border-gray-300 px-4">
      <img
        className="w-full md:h-[60vh] rounded-xl"
        data-aos="zoom-in"
        src={cover_image}
        alt=""
      />
      <div className="flex items-center gap-8 py-2" data-aos="fade-down">
        <h3 className="text-xl font-semibold text-gray-400 flex items-center gap-1">
          <FaDollarSign className="text-orange-600" />
          {price}
        </h3>
        <span className="font-medium btn btn-sm bg-gray-600 text-white">
          {segment_name}
        </span>
      </div>
      <div className="flex items-center gap-6" data-aos="fade-down">
        <span className="btn btn-sm bg-orange-600 text-white">{status}</span>
        <span className="btn btn-sm bg-orange-600 text-white">{area}</span>
      </div>
      <h2 className="text-xl font-bold" data-aos="fade-right">
        {estate_title}
      </h2>
      <p className="text-gray-600" data-aos="fade-right">
        {description}
      </p>
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h4 className="md:text-xl font-semibold">Facilities:</h4>
        <ul className="ml-8 mt-2 space-y-2 text-gray-600">
          <li className="md:font-medium list-disc">{facilities?.[0]}</li>
          <li className="md:font-medium list-disc">{facilities?.[1]}</li>
          <li className="md:font-medium list-disc">{facilities?.[2]}</li>
          <li className="md:font-medium list-disc">{facilities?.[3]}</li>
          <li className="md:font-medium list-disc">{facilities?.[4]}</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-semibold md:text-xl" data-aos="fade-right">
          <span className="mr-2">Location:</span>
          {location}
        </span>
        <div>
          <button
            data-aos="fade-left"
            className="btn bg-orange-600 text-white mr-4"
          >
            {status === "Rent" ? "Rent Now" : "Buy Now"}
          </button>
          <Link
            data-aos="fade-left"
            to="/plans"
            className="btn bg-gray-600 text-white"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ViewProperty;
