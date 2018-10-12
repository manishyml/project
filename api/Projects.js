const express = require("express");
const router = express.Router();
const Projects = require("../models/projects");

router.get("/test", (req, res) => {
  res.json({ msg: "welcome to users api" });
});

router.post("/register", (req, res) => {
  const newUser = new Projects({
    Project_Id: req.body.Project_Id,
    Project_Name: req.body.Project_Name,
    Dealership: req.body.Dealership,
    Deal_Amount: req.body.Deal_Amount,
    Description: req.body.Description
  });
  newUser
    .save()
    .then(user => res.json(user))
    .catch(err => res.sendStatus(403).json({ message: err }));
});
router.get("/register", (req, res) => {
  Projects.find({}).then(users => {
    console.log(users);
    res.json({ users });
  });
});

module.exports = router;