const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  Project_Id: {
    type: String,
    required: true
  },
  Employee_Id: {
    type: Number,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Role: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Team", TeamSchema);
