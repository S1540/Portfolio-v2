import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const ProtectedRoutes = ({ children }) => {
  const { isAuth } = useAuth();
  if (isAuth === null) {
    return null;
  }
  if (isAuth === false) {
    return <Navigate to="/lock-Auth" replace />;
  }

  return children;
};

export default ProtectedRoutes;
