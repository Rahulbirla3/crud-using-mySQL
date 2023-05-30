const express = require("express");
const router = express.Router();
const {
  userLoginController,
  userRegisterController,
} = require("../controller/userController");

router.post("/login", userLoginController);
router.post("/register", userRegisterController);

module.exports = router;
