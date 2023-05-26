const express = require("express");
const {
  getTasksController,
  createTaskController,
  taskDeleteController,
  taskEditController,
} = require("../controller/taskController");
const app = express();

const taskRouter = express.Router();
taskRouter.get("/getTasks", getTasksController);
taskRouter.post("/createTask", createTaskController);
taskRouter.delete("/deleteTask", taskDeleteController);
taskRouter.put("/editTask", taskEditController);

module.exports = taskRouter;
