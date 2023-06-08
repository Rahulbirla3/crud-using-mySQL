const db = require("../mySql/mySqlConnection");

const createTaskController = (req, res) => {
  const { email, title, description } = req.body;
  // console.log(req.body);

  try {
    const postData = `INSERT INTO tasktable (email , title , description) VALUES ("${email}", "${title}" ,"${description}")`;

    db.query(postData, (error, result) => {
      console.log(postData);
      if (!result) return res.send(error);
      res
        .status(200)
        .send({ msg: "data is saved successfully", success: "true", result });
    });
  } catch (error) {
    console.log(error);
  }
};

const getTasksController = (req, res) => {
  try {
    // email is comes in jwt token
    const selectTask =
      req.accesstype === "admin"
        ? "SELECT * FROM tasktable"
        : `SELECT * FROM tasktable WHERE email='${req.email}'`;

    db.query(selectTask, (error, result) => {
      console.log("31", result);
      if (!result) return res.status(500).send(error);
      res
        .status(200)
        .send({ msg: "all user Tasks", success: "true", result, error });
    });
  } catch (error) {
    console.log(error);
  }
};

const taskEditController = (req, res) => {
  const { title, description , sno } = req.body;

  console.log(req.body);
  // here sno is id we can get from frontend

  const updateQuery = `UPDATE tasktable SET title='${title}', description='${description}' WHERE sno='${sno}'`;

  db.query(updateQuery, (error, result) => {
    if (error) return res.status(500).send(error);
    res
      .status(200)
      .send({ msg: "data updated successfully", success: "true", result });
  });
};

const taskDeleteController = (req, res) => {
  // here sno is id we can get from frontend
  console.log(req.params.id);

  const updateQuery = `DELETE FROM tasktable WHERE sno=${req.params.id}`;

  db.query(updateQuery, (error, result) => {
    if (error) return res.status(500).send(error);
    res
      .status(200)
      .send({ msg: "data deleted successfully", success: "true", result });
  });
};

module.exports = {
  getTasksController,
  createTaskController,
  taskDeleteController,
  taskEditController,
};
