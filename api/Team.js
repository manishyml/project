const express = require("express");
const Team = require("../models/team");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ msg: "Welcome to team api" });
});

router.post("/addTeam", (req, res) => {
  console.log(req.body);
  const newTeam = new Team({
    Project_Id: req.body.Project_Id,
    Employee_Id: req.body.Employee_Id,
    Name: req.body.Name,
    Role: req.body.Role
  });
  newTeam
    .save()
    .then(team => {
      console.log("inside new team: ", team);
      res.json({ team: team });
    })
    .catch(err => {
      res.sendStatus(403).send({ msg: err });
    });
});

module.exports = router;
