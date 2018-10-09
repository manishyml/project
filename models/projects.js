const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
  Project_Id: {
    type: Number,
    required: true
  },
  Project_Name: {
    type: String,
    required: true
  },
  Dealership: {
    type: String,
    required: true
  },
  Deal_Amount: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Projects", ProjectsSchema);
