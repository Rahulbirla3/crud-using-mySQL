const db = require("../mySql/mySqlConnection");

const getMechanicController = (req, res) => {
  try {
    let select =
      "SELECT username , email , password , number , address , accesstype , Date FROM singupdata WHERE accesstype = 'mechanic'";

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

const getTopMechanicController = (req, res) => {
  try {
    let select =
      "SELECT sno , username , email , password , number , address , accesstype , Date FROM singupdata WHERE accesstype = 'mechanic'";

    db.query(select, (error, result) => {
      if (!result)
        return res.send({ success: false, msg: "user not present", error });

      // getting the sort value
      let arr = result;
      arr = arr.sort((a, b) => {
        if (a.number < b.number) return 1;
        if (a.number > b.number) return -1;
        return 0;
      });

      arr = arr.slice(arr.length - 3, arr.length);

      res.send({
        success: true,
        msg: "Top Three mechanic",
        arr,
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

module.exports = { getMechanicController, getTopMechanicController };
