import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Loadings from "../Pages/Shared/Loadings";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // TRACK LOCATION
  const location = useLocation();

  if (loading) {
    return <Loadings />
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivetRoute;
