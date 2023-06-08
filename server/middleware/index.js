const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token)
    return res
      .status(500)
      .send({ success: "false", msg: "token is not found" });

  const user = jwt.verify(token, "iamusingjsonwebtoken");

  if (!user) return res.send({ success: "false", msg: "user is not found" });
  const decoded = jwt.decode(token);

  req.accesstype = decoded.accesstype;
  req.email = decoded.email;

  next();
};

module.exports = verifyToken;
