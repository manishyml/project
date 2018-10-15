const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const url = "mongodb://manish:passwordyml123@ds245150.mlab.com:45150/project";
const users = require("./api/Users.js");
const projects = require("./api/Projects.js");
const team = require("./api/Team.js");

const cors = require("cors");

//adding middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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
app.use("/projects", projects);
app.use("/team", team);

//Setting port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running at", port);
});
