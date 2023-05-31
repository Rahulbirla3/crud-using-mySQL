import React from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import RouterComponent from "./router/RouterComponent";
import "./App.css";
import RouterReducer from "./router/RouterReducer";

const App = () => {
  return (
    <>
      <RouterReducer>
        <BrowserRouter>
          <Navbar />
          {/* This is Router component */}
          <RouterComponent />
        </BrowserRouter>
      </RouterReducer>
    </>
  );
};

export default App;
