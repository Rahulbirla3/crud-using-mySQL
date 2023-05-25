const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

// for prevent the errors
app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "firstwebsite",
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO newtable (name , pincode) VALUES ( 'rul' , 454775)";
  db.query(sqlInsert, (error, result) => {
    console.log(error);
    console.log(result);
    res.send("hello world");
  });

});

// db.connect((error)=>{
//     if(error) throw error;

//     console.log('connected');

//     const sqlInsert =
//     "INSERT INTO newtable (name , pincode) VALUES ( 'rahul' , 454775)";

//     db.query(sqlInsert , (error , result)=>{
//         console.log(error);
//         console.log(result);
//     })

// })

app.listen("8000", () => {
  console.log("server running successfuly 8000");
});
