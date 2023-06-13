import React from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import RouterComponent from "./router/RouterComponent";
import "./App.css";
import RouterReducer from "./router/RouterReducer";
import store from "./Redux/store";
import { Provider } from "react-redux";
// toast start
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//End toast start

const App = () => {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <RouterReducer>
          <BrowserRouter>
            <Navbar />
            {/* This is Router component */}
            <RouterComponent />
          </BrowserRouter>
        </RouterReducer>
      </Provider>
    </>
  );
};

export default App;
