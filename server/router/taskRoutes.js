const express = require("express");
const {
  getTasksController,
  createTaskController,
  taskDeleteController,
  taskEditController,
} = require("../controller/taskController");
const verifyToken = require("../middleware");
const taskRouter = express.Router();



taskRouter.get("/getTasks", verifyToken, getTasksController);
taskRouter.post("/createTask", verifyToken, createTaskController);
taskRouter.delete("/deleteTask", verifyToken, taskDeleteController);
taskRouter.put("/editTask", verifyToken, taskEditController);

module.exports = taskRouter;
