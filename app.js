require("./authentication/auth");
const express = require("express");
const app = express();
const passport = require("passport");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const bookRouter = require("./routes/bookRoute");
const authRouter = require("./routes/authRoute");

require("dotenv").config();
const PORT = process.env.PORT;



const dbConnection = require("./dbConfig/dbConnection");
dbConnection();

app.use("/api", authRouter);
app.use(
  "/api/books",
  passport.authenticate('jwt', { session: false }),
  bookRouter
);
// app.use('/api/books', bookRouter)

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Home Page");
});

app.listen(PORT, () => {
  console.log("App is runing at", PORT);
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.json({ error: err.message });
});
