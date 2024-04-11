import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";
import { AuthContext } from "../Provider/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, password);

    if (password.length < 6) {
      toast.warn("Password should be 6 characters or longer");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.warn("Password should have 1 Small Letter");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.warn("Password should have 1 Capital Letter");
      return;
    }

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate("/");
        setTimeout(() => {
          toast.success("Successfully Registered Account");
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero">
      <div className="flex flex-col">
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-3xl md:text-5xl font-bold">Register Now !</h1>
          <p className="py-6">Please enter your details</p>
        </div>
        <div className="card w-full shadow-2xl bg-base-100 ">
          <form
            onSubmit={handleRegister}
            className="card-body"
            data-aos="zoom-in"
          >
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
                type="url"
                placeholder="image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-xl right-1 top-1/2 -translate-y-1/2 -translate-x-1"
                >
                  {showPassword ? <HiEyeOff /> : <HiEye />}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot Password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register Now</button>
            </div>
            <span className="p-4 text-[.9rem] text-center">
              Already have an account?{" "}
              <Link
                to="/login-page"
                className="underline text-blue-600 font-medium"
              >
                Log In
              </Link>
            </span>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterPage;
