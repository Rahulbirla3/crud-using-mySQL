const jwt = require("jsonwebtoken");
const db = require("../mySql/mySqlConnection");

const userLoginController = (req, res) => {
  try {
    const { email, password } = req.body;
    let select = `SELECT username , email , password , number , address , accesstype accesstype FROM singupdata WHERE email = '${email}'`;

    db.query(select, (error, result) => {
      result = result?.[0];
      if (!result)
        return res.send({ success: false, msg: "user does not exists" });
      if (result.email !== email) {
        return res.send({
          success: false,
          msg: "email and password is not matched",
        });
      }
      if (result.password !== password) {
        return res.send({
          success: false,
          msg: "email and password is not matched",
        });
      }
      const token = jwt.sign(email, "iamusingjsonwebtoken");
      console.log(token);
      res.send({
        success: true,
        msg: "Login successfully",
        token,
        result,
      });
    });
  } catch (error) {
    resstatus(401).send({
      success: false,
      msg: "Some error is occured",
      error,
    });
    console.log(error);
  }
};

const userRegisterController = (req, res) => {
  try {
    const { username, email, password, number, address, accesstype } = req.body;
    console.log(req.body);
    let msgObject = { success: "false", mag: "", result: "" };
    let insertData = `INSERT INTO singupdata (username , email , password , number , address , accesstype) VALUES ('${username}' ,'${email}' , '${password}', '${number}' ,'${address}','${accesstype}')`;

    db.query(insertData, (error, result) => {
      console.log(error);
      console.log(!result);
      if (!result)
        return res.send({
          success: "false",
          msg: "data not submitted",
          error,
        });

      res.status(200).send({
        success: "true",
        msg: "User registered successfully",
        result: result,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { userLoginController, userRegisterController };
