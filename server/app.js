const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./router/userRouter");
const taskRouter = require("./router/taskRoutes");
const adminRouter = require("./router/adminRoutes");

// configuration
app.use(cors());
app.use(express.json());

// express router
app.use("/v2", userRouter);
app.use("/v2", taskRouter);
app.use("/v2", adminRouter);

app.listen("8000", () => {
  console.log("server running successfuly 8000");
});
