const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const url = "mongodb://manish:passwordyml123@ds245150.mlab.com:45150/project";
const users = require("./api/Users.js");

//adding middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connect to mongoDB
mongoose
  .connect(
    url,
    { useNewUrlParser: true }
  )
  .then((req, res) => {
    console.log("MongoDB Connected");
  })
  .catch(err => {
    console.log(err);
  });

//Welcome to api
app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/users", users);

//Setting port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running at", port);
});
