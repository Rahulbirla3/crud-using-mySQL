const mysql = require("mysql");

let db;

const connection = () => {
  try {
    db = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "firstwebsite",
    });

    console.log("Database Connection successfully");
  } catch (error) {
    console.log("Database Connection error", error);
  }
};

connection();
module.exports = db;
