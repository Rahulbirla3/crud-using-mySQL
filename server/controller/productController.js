const db = require("../mySql/mySqlConnection");

// const getAllProductController = (req, res) => {};

const addToCartProductController = (req, res) => {
  console.log(req.body);
  const { name, email, price, count } = req.body;

  const select = `INSERT INTO addtocart (name , email , price , count) VALUES ('${name}' , '${email}', '${price}', '${count}')`;

  try {
    db.query(select, (error, result) => {
      console.log(result);
      if (error)
        return res.send({
          success: "false",
          msg: "data not submitted",
          error,
        });

      res.status(200).send({
        success: "true",
        msg: "data added in cart",
        result: result,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

const getCartDataController = (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const select = `SELECT sno , name , email , price , count , date FROM addtocart WHERE email='${email}' `;
    db.query(select, (error, result) => {
      if (!result)
        return res.send({
          success: "false",
          msg: "user cart data is not fetched",
          error,
        });

      res.status(200).send({
        success: "true",
        msg: "all data in cart",
        result: result,
      });
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addToCartProductController,
  getCartDataController,
};
