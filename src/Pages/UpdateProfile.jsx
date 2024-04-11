import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

function UpdateProfile() {
  const { updateUserProfile } = useContext(AuthContext);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const image = form.get("image");
    console.log(name, image);

    updateUserProfile(name, image) // it does not work, i Couldn't make this work
      .then(() => {
        console.log("updated successfully");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero py-12">
      <div className="hero-content flex-col">
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-3xl md:text-5xl font-bold">Update Profile !</h1>
          <p className="py-6">Please enter your details</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateProfile} className="card-body" data-aos="zoom-in">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input name="image" type="file" placeholder="image" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateProfile;
