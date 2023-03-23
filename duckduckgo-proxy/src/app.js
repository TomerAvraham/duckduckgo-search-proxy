const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");
const globalErrorHandler = require("./errors/globalErrorHandler");
const { NotFoundError } = require("./errors/errorConstructor");

const app = express();

app.use(helmet());
app.use(xss());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const searchRoutes = require("./routes/searchRoutes");
app.use("/search", searchRoutes);

app.all("*", (req, res, next) => {
  next(new NotFoundError());
});

app.use(globalErrorHandler);

module.exports = app;
