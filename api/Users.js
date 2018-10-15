const express = require("express");
const router = express.Router();
const Users = require("../models/users");

router.get("/test", (req, res) => {
  res.json({ msg: "welcome to users api" });
});

router.post("/register", (req, res) => {
  const newUser = new Users({
    Employee_Id: req.body.Employee_Id,
    Email: req.body.Email,
    User_Type: req.body.User_Type
  });
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.sendStatus(403).json({ message: err }));
});

router.get("/register", (req, res) => {
  Users.find({}).then(users => {
    console.log(users);
    res.json({ users });
  });
});

router.get("/checkUser/:Email", (req, res) => {
  Users.find({ Email: req.params.Email }).then(user => {
    res.json({ user: user[0].User_Type });
  });
});

module.exports = router;
