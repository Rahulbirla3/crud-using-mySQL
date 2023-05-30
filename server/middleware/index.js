const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token)
    return res
      .status(500)
      .send({ success: "false", msg: "token is not found" });

  const user = jwt.verify(token, "iamusingjsonwebtoken");

  if (!user) return res.send({ success: "false", msg: "user is not found" });

  console.log(user);

  next();
};

module.exports = verifyToken;
