import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../Provider/AuthProvider";

function UpdateProfile() {
  const { updateUserProfile } = useContext(AuthContext);

  const handleUpdateProfile = () => {
    updateUserProfile()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero py-12">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Update Profile !</h1>
          <p className="py-6">Please enter your details</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUpdateProfile} className="card-body">
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
              <input
                name="image"
                type="file"
                placeholder="image"
                // className="input input-bordered"
                required
              />
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
