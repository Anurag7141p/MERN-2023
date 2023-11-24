require("dotenv").config();
const express = require("express");
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();
const port = 5000;

app.use(express.json());
app.use("/api/auth", router);

app.use(errorMiddleware);
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
