import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiEye } from "react-icons/hi";
import { HiEyeOff } from "react-icons/hi";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
        toast.warn(loginError);
      });
  };

  return (
    <div className="hero py-12">
      <Helmet>
        <title>Login - Page</title>
      </Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login Now !</h1>
          <p className="py-6">Please enter your details</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
