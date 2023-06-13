const express = require("express");
const {
  getTasksController,
  createTaskController,
  taskDeleteController,
  taskEditController,
  getFavoriteTaskController,
} = require("../controller/taskController");
const verifyToken = require("../middleware");
const taskRouter = express.Router();



taskRouter.get("/getFavTasks", verifyToken , getFavoriteTaskController);
taskRouter.get("/getTasks/:email", verifyToken , getTasksController);
taskRouter.post("/createTask", verifyToken, createTaskController);
taskRouter.delete("/deleteTask/:id", verifyToken, taskDeleteController);
taskRouter.put("/editTask", verifyToken, taskEditController);

module.exports = taskRouter;
