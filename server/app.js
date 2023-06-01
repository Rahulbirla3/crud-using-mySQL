const express = require("express");
const app = express();
const cors = require("cors");
const signupRouter = require("./router/signupRouter");
const taskRouter = require("./router/taskRoutes");
const userRouter = require("./router/userRouter");
const mechanicRouter = require("./router/mechanicRouter");

// configuration
app.use(cors());
app.use(express.json());

// express router
app.use("/v2", signupRouter);
app.use("/v2", taskRouter);
app.use("/v2", userRouter);
app.use("/v2", mechanicRouter);

app.listen("8000", () => {
  console.log("server running successfuly 8000");
});
