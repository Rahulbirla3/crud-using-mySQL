const express = require("express");
const { getUserController } = require("../controller/userController");
const userRouter = express.Router();

userRouter.get("/getuser", getUserController);

module.exports = userRouter;
