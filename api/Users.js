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
    .catch(err => res.json({ message: err }).status(403));
});

module.exports = router;
