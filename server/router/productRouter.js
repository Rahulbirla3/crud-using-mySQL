const express = require("express");
const {
  addToCartProductController,
  getCartDataController,
} = require("../controller/productController");
const productRouter = express.Router();

productRouter.post("/addcart", addToCartProductController);
productRouter.post("/getcart", getCartDataController);

module.exports = productRouter;
