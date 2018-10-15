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
    type: Number,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Team: {
    type: Array,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Projects", ProjectsSchema);
