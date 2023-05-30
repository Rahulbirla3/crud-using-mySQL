import React from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Error from "./components/Error";
import RouterComponent from "./router/RouterComponent";
import "./App.css";

const App = () => {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* This is Router component */}
        <RouterComponent />
      </BrowserRouter>
    </>
  );
};

export default App;
