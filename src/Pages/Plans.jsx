import React, { useEffect, useState } from "react";
import PlansCard from "../Components/PlansCard";

function Plans() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetch("/residential.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlans(data);
      });
  }, []);

  return (
    <div className="py-12 space-y-8">
      <div>
        {" "}
        <span className="text-xl font-semibold text-orange-600">Our Plans</span>
        <h2 className="text-4xl font-bold text-blue-600 mt-2">
          Popular Residences<span className="text-orange-600">.</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <PlansCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}

export default Plans;
