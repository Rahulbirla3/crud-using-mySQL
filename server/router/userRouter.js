const express = require("express");
const userRouter = express.Router();
const {
  userLoginController,
  userRegisterController,
} = require("../controller/userController");

userRouter.post("/login", userLoginController);
userRouter.post("/register", userRegisterController);

module.exports = userRouter;
