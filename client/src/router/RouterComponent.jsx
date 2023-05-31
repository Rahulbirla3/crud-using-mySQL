import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "../components/Navbar";
import ProtectedRoute from "./ProtectedRoute";
import Error from "../components/Error";
import RouterContext from "./RouterContext";
//
const RouterComponent = () => {
  const accesstype = localStorage.getItem("accesstype");
  const token = localStorage.getItem("token");

  const { state, updateData } = useContext(RouterContext);
  const { filterAllPath, filterCommonPath } = state;

  useEffect(() => {
    updateData(token, accesstype);
  }, [accesstype, token]);

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          {filterAllPath?.map((v, index) => {
            return <Route key={index} path={v.path} element={v.page} />;
          })}
        </Route>

        {/* this routes is not protected */}
        {filterCommonPath?.map((v, index) => {
          return <Route key={index} path={v.path} element={v.page} />;
        })}

        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default RouterComponent;