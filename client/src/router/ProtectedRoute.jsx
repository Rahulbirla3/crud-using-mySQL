import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { paths } from "./RouterReducer";

const ProtectedRoute = () => {
  let jwt = localStorage.getItem("token");

  console.log("jwt");

  return !jwt ? <Navigate to={paths.Login} /> : <Outlet />;
};

export default ProtectedRoute;
