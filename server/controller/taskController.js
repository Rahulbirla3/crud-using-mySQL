const db = require("../mySql/mySqlConnection");

const createTaskController = (req, res) => {
  const { email, title, description } = req.body;
  console.log(req.body);

  const postData = `INSERT INTO tasktable (email , title , description) VALUES ("${email}", "${title}" ,"${description}")`;

  db.query(postData, (error, result) => {
    if (error) return res.send(error);
    res
      .status(200)
      .send({ msg: "data is saved successfully", success: "true", result });
  });
};

const getTasksController = (req, res) => {
  //   const { email } = req.body;

  // email is comes in jwt token

  const selectTask = "SELECT * FROM tasktable WHERE email='12@gmail.com'";

  db.query(selectTask, (error, result) => {
    if (error) return res.status(500).send(error);

    res.status(200).send({ msg: "all user Tasks", success: "false", result });
  });
};

const taskEditController = (req, res) => {
  const {title , description } = req.body;

  console.log(req.body);
// here sno is id we can get from frontend

  const updateQuery = `UPDATE tasktable SET title='${title}', description='${description}' WHERE sno='${1}'`;

  db.query(updateQuery, (error, result) => {
    if (error) return res.status(500).send(error);
    res
      .status(200)
      .send({ msg: "data updated successfully", success: "true", result });
  });
};

const taskDeleteController = (req, res) => {

// here sno is id we can get from frontend

  const updateQuery = `DELETE FROM tasktable WHERE sno=1`;

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
