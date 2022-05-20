import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateWrapper = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  return isAuthenticated ? <Outlet /> : <Navigate to='/signup' />;
};

export default PrivateWrapper;
