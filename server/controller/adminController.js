const db = require("../mySql/mySqlConnection");

const getUserController = (req, res) => {
  try {
    let select =
      "SELECT username , email , password , number , address , accesstype , Date FROM singupdata WHERE accesstype IN ('user' , 'mechanic')";

    db.query(select, (error, result) => {
      if (!result)
        return res.send({ success: false, msg: "user not present", error });

      res.send({
        success: true,
        msg: "user is present",
        result,
      });
    });
  } catch (error) {
    res.status(401).send({
      success: false,
      msg: "Some error is occured",
      error,
    });
  }
};

module.exports = { getUserController };
