import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUser } from "react-icons/fa";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/plans">Plans</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/review">Review</NavLink>
      </li>
    </>
  );

  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        navigate("/login-page");
        setTimeout(() => {
          toast.success("Logged out successfully");
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar bg-base-100 py-10 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 space-y-4 z-10"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl font-bold text-orange-600"
          data-aos="fade-right"
        >
          VistaVillas
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4" data-aos="fade-down">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-4" data-aos="fade-left">
        <div className="flex-none z-20">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar flex items-center justify-center tooltip"
              data-tip={user?.displayName}
            >
              <div className="w-10 rounded-full">
                {user ? (
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                ) : (
                  <span className="text-xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <FaUser />
                  </span>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4"
            >
              <li>
                <NavLink to="/user-profile" className="justify-between">
                  User Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/update-profile">Update Profile</NavLink>
              </li>
              <li>
                {user ? (
                  <Link onClick={handleLogOut} className="btn btn-sm">
                    Log Out
                  </Link>
                ) : (
                  <Link to="/login-page" className="btn btn-sm">
                    Log In
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Navbar;
