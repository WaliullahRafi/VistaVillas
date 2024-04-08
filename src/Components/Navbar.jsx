import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";

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
        <NavLink to="/our-service">Our Service</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
    </>
  );

  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        console.log("Logged out successfully");
        navigate("/login-page");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="navbar bg-base-100 py-6">
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
        <Link to="/" className="text-2xl font-bold">
          VistaVillas
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="flex-none z-20">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4"
            >
              <li>
                <a className="justify-between">User Profile</a>
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
    </div>
  );
}

export default Navbar;
