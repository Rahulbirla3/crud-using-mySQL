const express = require("express");
const signupRouter = express.Router();
const {
  userLoginController,
  userRegisterController,
} = require("../controller/signupController");

signupRouter.post("/login", userLoginController);
signupRouter.post("/register", userRegisterController);

module.exports = signupRouter;
