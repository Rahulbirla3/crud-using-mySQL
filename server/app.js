const router = require("./router/userRouter");
const express = require("express");
const app = express();
const cors = require("cors");
const taskRouter = require("./router/taskRoutes");

// configuration
app.use(cors());
app.use(express.json());

// express router
app.use("/v2", router);
app.use("/v2", taskRouter);

app.listen("8000", () => {
  console.log("server running successfuly 8000");
});
