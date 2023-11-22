require('dotenv').config()
const express = require("express");
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const app = express();
const port = 5000;

app.use(express.json());
app.use("/api/auth", router);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
