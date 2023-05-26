const jwt = require("jsonwebtoken");
const db = require("../mySql/mySqlConnection");

const userLoginController = (req, res) => {
  const { email, password } = req.body;
  let select = `SELECT email , password FROM newTable WHERE email = '${email}' `;

  db.query(select, (error, result) => {
    result = result?.[0];
    let msgObject = { success: "false", msg: "", result: "" };
    msgObject = (() => {
      if (error) return res.send(error);
      if (!result) return { ...msgObject, msg: "user does not exists" };
      if (result.email !== email)
        return { ...msgObject, msg: "email and password is not matched" };
      if (result.password !== password)
        return { ...msgObject, msg: "email and password is not matched" };

      const token = jwt.sign(email, "iamusingjsonwebtoken");

      return {
        success: "true",
        msg: "Login successfully",
        token,
        result: result
      };
    })();

    res.status(401).send(msgObject);
  });
};

const userRegisterController = (req, res) => {
  const { email, password } = req.body;
  let msgObject = { success: "false", mag: "", result: "" };
  let insertData = `INSERT INTO newTable (email , password) VALUES ('${email}' , '${password}')`;

  db.query(insertData, (error, result) => {
    result = result?.[0];
    console.log(result);
    msgObject = (() => {
      if (error) return res.send(error);
      return {
        success: "true",
        msg: "Login successfully",
        result: result,
      };
    })();

    res.status(200).send(msgObject);
  });
};

module.exports = { userLoginController, userRegisterController };
