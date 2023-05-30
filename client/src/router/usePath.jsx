import React from "react";
import Dashbord from "../pages/Dashbord";
import Login from "../pages/Login";
import Tasks from "../components/Tasks";
import Signup from "../pages/Signup";

export let paths = {
  Root: "/",
  Tasks: "/tasks",
  Login: "/login",
  Signup: "/signup",
};

const usePath = (props) => {
  // all users see this path

  let commonPath = [
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
  ];

  // accoring to the login we show navbar buttons
  if (props?.token) {
    commonPath = [
      {
        name: "",
        path: "/",
        page: <Dashbord />,
      },
    ];
  }

  let allPath = [];

  // according to the access type we can show Routing
  if (props?.accesstype === "admin") {
    console.log(props?.accesstype);
    allPath = [
      {
        name: "Task",
        path: "/tasks",
        page: <Tasks />,
      },
    ];
  } else if (props?.accesstype === "user") {
    allPath = [
      {
        name: "Task",
        path: "/tasks",
        page: <Tasks />,
      },
    ];
  } else if (props?.accesstype === "mechanic") {
    allPath = [
      {
        name: "Task",
        path: "/tasks",
        page: <Tasks />,
      },
    ];
  }

  return { allPath, commonPath };
};

export default usePath;
