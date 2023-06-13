const db = require("../mySql/mySqlConnection");

// const getAllProductController = (req, res) => {};

const addToCartProductController = (req, res) => {
  // console.log(req.body);
  const { sno, name, email, price, count } = req.body;

  const select = `SELECT sno,  name , email , price, count FROM addtocart WHERE name='${name}'`;
  let newCount = count;

  try {
    db.query(select, (error, result) => {
      let check = true;
      console.log("result16", result, error);
      // console.log(!error);
      if (!error && result.length !== 0) {
        console.log("ENTERED");
        check = false;
        console.log(typeof result[0]?.count, typeof count);
        newCount = Number(count) + Number(result[0]?.count);
      }

      const insert = check
        ? `INSERT INTO addtocart (name , email , price , count) VALUES ('${name}' , '${email}', '${price}', '${newCount}')`
        : `UPDATE addtocart SET count='${newCount}' WHERE  name='${name}' `;

      console.log(newCount);
      console.log(insert);

      db.query(insert, (error, result) => {
        // console.log(result);
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
    });
  } catch (error) {
    console.log(error);
  }
};

const getCartDataController = (req, res) => {
  console.log(req.params);
  try {
    const select = `SELECT sno , name , email , price , count , date FROM addtocart WHERE email='${req.params.email}' `;
    db.query(select, (error, result) => {
      console.log(result);  
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
