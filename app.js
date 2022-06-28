const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Routers
const indexRouter = require("./routes/index");
const newsRouter = require("./routes/news");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const mailRouter = require("./routes/mail");
const organizationsRouter = require("./routes/organizations");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Routes
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/news", newsRouter);
app.use("/users", usersRouter);
app.use("/auth", authRouter);
app.use("/mail", mailRouter);
app.use("/organizations", organizationsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server initialized on port ${process.env.SERVER_PORT} `);
});

module.exports = app;
