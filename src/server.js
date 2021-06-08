const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

//  express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

const imageRouter = require("./routers/image.router");

app.use("/api/v1", [imageRouter]);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "Welcome to Fluz Image",
  });
});

app.get("/server-error", () => {
  throw new Error("Internal Server Error");
});

const { notFound, serverError } = require("./middlewares/exceptionHandler");

app.use(serverError);
app.use(notFound);

module.exports = app;
