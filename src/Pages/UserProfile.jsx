import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

function UserProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-center w-full h-[70vh]">
      <div className="w-[50rem] rounded-3xl text-center flex flex-col items-center justify-center bg-white shadow-2xl p-12 relative">
        <img
          className="w-[10rem] h-[10rem] rounded-full bg-red-500 absolute -top-20"
          src={user ? user.photoURL : ""}
          alt=""
        />
        <div className="py-8 space-y-4 mt-8">
          <h2 className="text-xl mb-4 font-bold">
            {user ? user.displayName : "Rafi"}
          </h2>
          <span className="font-medium text-gray-500">Mohammadpur, Dhaka, Bangladesh</span>
          <p className="text-gray-600">
            Learning Web Development <br />
            at Programming Hero.
          </p>
        </div>
        <div className="flex items-center justify-between w-1/2">
          <div>
            <h3 className="text-2xl font-bold text-gray-600">55</h3>
            <span className="font-medium text-gray-500">Test Sites</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-600">65</h3>
            <span className="font-medium text-gray-500">Got Likes</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-600">45</h3>
            <span className="font-medium text-gray-500">Comments</span>
          </div>
        </div>
        <button className="btn mt-8">Show More</button>
      </div>
    </div>
  );
}

export default UserProfile;
