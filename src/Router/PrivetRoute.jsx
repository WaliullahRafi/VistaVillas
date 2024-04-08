import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivetRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return (
      <span className="loading loading-spinner text-error w-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
    );
  }

  return <Navigate state={location.pathname} to="/login-page" />;
}

export default PrivetRoute;
