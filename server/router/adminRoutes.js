const express = require("express");
const adminRouter = express.Router();
const { getUserController, getMechanicController } = require("../controller/adminController");

adminRouter.get("/getuser", getUserController);
adminRouter.get("/getmechanic", getMechanicController );

module.exports = adminRouter;
