import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";
import { AuthContext } from "../Provider/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const { loginUser, signInGoogle, signInWithGithub } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

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

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
        setTimeout(() => {
          toast.success("Successfully Logged In");
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
        setTimeout(() => {
          toast.success("Successfully Logged In");
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully Logged In");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero py-12">
      <div className="hero-content flex-col">
        <div className="text-center" data-aos="fade-down">
          <h1 className="text-3xl md:text-5xl font-bold">Login Now !</h1>
          <p className="py-6">Please enter your details</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body" data-aos="zoom-in">
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
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login Now</button>
            </div>
            <span className="p-4 text-[.9rem] text-center">
              Don't have an account?{" "}
              <Link
                to="/register-page"
                className="underline text-blue-600 font-medium"
              >
                Sign Up
              </Link>
            </span>
            <div className="flex items-center gap-2 justify-center">
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-green-600 text-white"
              >
                Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn bg-gray-900 text-white"
              >
                Github
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginPage;
