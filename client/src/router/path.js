// import Dashbord from "../pages/Dashbord";
// const { default: Tasks } = require("../components/Tasks");
// const { default: Login } = require("../pages/Login");
// const { default: Signup } = require("../pages/Signup");

// const token = localStorage.getItem("token");
// const accesstype = localStorage.getItem("accesstype");

// console.log(token);

// export let paths = {
//   Root: "/",
//   Tasks: "/tasks",
//   Login: "/login",
//   Signup: "/signup",
// };

// // all users see this path
// export let commonPath = [
//   {
//     name: "Dashbord",
//     path: "/",
//     page: <Dashbord />,
//   },
//   {
//     name: "Signup",
//     path: "/signup",
//     page: <Signup />,
//   },
//   {
//     name: "Login",
//     path: "/login",
//     page: <Login />,
//   },
// ];

// // accoring to the login we show navbar buttons
// if (token) {
//   commonPath = [
//     {
//       name: "",
//       path: "/",
//       page: <Dashbord />,
//     },
//   ];
// }

// let allPath = []

// // according to the access type we can show Routing
// if (accesstype === "admin") {
//   allPath = [
//     {
//       name: "Task",
//       path: "/tasks",
//       page: <Tasks />,
//     },
//   ];
// } else if (accesstype === "user") {
//   allPath = [
//     {
//       name: "Task",
//       path: "/tasks",
//       page: <Tasks />,
//     },
//   ];
// } else if (accesstype === "mechanic") {
//   allPath = [
//     {
//       name: "Task",
//       path: "/tasks",
//       page: <Tasks />,
//     },
//   ];
// }



// export default allPath;
