import React from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "../components/Navbar";
import ProtectedRoute from "./ProtectedRoute";
import Error from "../components/Error";
import usePath from "./usePath";
//
const RouterComponent = () => {
  const accesstype = localStorage?.getItem("accesstype");
  const token = localStorage?.getItem("token");

  console.log(accesstype);

  const { allPath, commonPath } = usePath({ token, accesstype });

  console.log(allPath, commonPath);

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute />}>
          {allPath.map((v, index) => {
            return <Route key={index} path={v.path} element={v.page} />;
          })}
        </Route>

        {/* this routes is not protected */}
        {commonPath.map((v, index) => {
          return <Route key={index} path={v.path} element={v.page} />;
        })}

        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default RouterComponent;
