import React, { useReducer } from "react";
import Dashbord from "../pages/Dashbord";
import Login from "../pages/Login";
import Tasks from "../components/Tasks";
import Signup from "../pages/Signup";
import RouterContext from "./RouterContext";
import MechanicDetails from "../pages/MechanicDetails";

const paths = {
  Root: "/",
  Tasks: "/tasks",
  Login: "/login",
  Signup: "/signup",
};

const reducer = (state, action) => {
  const { type, payload } = action;
  const { token, accesstype } = payload;
  switch (type) {
    case "updateData":
      let updatedAllPath = state.allPath;
      let updatedCommonPath = state.commonPath;
      console.log(token);
      // accoring to the login we show navbar buttons
      if (token) {
        updatedCommonPath = [
          {
            name: "",
            path: "/",
            page: <Dashbord />,
          },
        ];
      }

      // according to the access type we can show Routing
      if (accesstype === "admin") {
        console.log(accesstype);
        updatedAllPath = [
          {
            name: "Mechanic Details",
            path: "/mechanicdetails",
            page: <MechanicDetails />,
          },
        ];
      } else if (accesstype === "user") {
        updatedAllPath = [
          {
            name: "Task",
            path: "/tasks",
            page: <Tasks />,
          },
        ];
      } else if (accesstype === "mechanic") {
        updatedAllPath = [
          {
            name: "Task",
            path: "/tasks",
            page: <Tasks />,
          },
        ];
      }

      return {
        ...state,
        filterAllPath: updatedAllPath,
        filterCommonPath: updatedCommonPath,
      };
    default:
      return state;
  }
};

const RouterReducer = (props) => {
  const initialState = {
    commonPath: [
      {
        name: "Dashbord",
        path: "/",
        page: <Dashbord />,
      },
      {
        name: "Signup",
        path: "/signup",
        page: <Signup />,
      },
      {
        name: "Login",
        path: "/login",
        page: <Login />,
      },
    ],
    allPath: [],
    filterAllPath: [],
    filterCommonPath: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //
  // console.log(commonPath, allPath);

  function updateData(token, accesstype) {
    return dispatch({ type: "updateData", payload: { token, accesstype } });
  }

  return (
    <RouterContext.Provider value={{ state, updateData }}>
      {props.children}
    </RouterContext.Provider>
  );
};

export default RouterReducer;
export { paths };
