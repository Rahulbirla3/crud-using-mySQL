const jwt = require("jsonwebtoken");
const db = require("../mySql/mySqlConnection");

const userLoginController = (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    let select = `SELECT username , email , password , number , address , accesstype accesstype FROM singupdata WHERE email = '${email}'`;

    db.query(select, (error, result) => {
      console.log("result123", result?.[0]);
      if (!result)
        return res.send({ success: false, msg: "user does not exists", error });
      if (result[0]?.email !== email) {
        return res.send({
          success: false,
          msg: "email is not matched",
        });
      }
      console.log(password);
      if (result[0]?.password !== password) {
        return res.send({
          success: false,
          msg: "password is not matched",
        });
      }
      console.log(result[0]?.accesstype);
      const token = jwt.sign(
        { email: email , accesstype: result[0]?.accesstype },
        "iamusingjsonwebtoken"
      );
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
    // console.log(req.body);
    let insertData = `INSERT INTO singupdata (username , email , password , number , address , accesstype) VALUES ('${username}' ,'${email}' , '${password}', '${number}' ,'${address}','${accesstype}')`;

    db.query(insertData, (error, result) => {
      console.log(result, error);
      if (error)
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
