const express = require("express");
const adminRouter = express.Router();
const { getUserController } = require("../controller/adminController");

adminRouter.get("/getuser", getUserController);

module.exports = adminRouter;
