const express = require("express");
const { getMechanicController, getTopMechanicController } = require("../controller/mechanicController");
const mechanicRouter = express.Router();

mechanicRouter.get("/getmechanic", getMechanicController );
mechanicRouter.get("/gettopmechanic", getTopMechanicController );

module.exports = mechanicRouter;
