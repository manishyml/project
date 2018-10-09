const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UpdatesSchema = new Schema({
  Project_id: {
    type: Number,
    required: true
  },
  Updated_By: {
    type: String,
    required: true
  },
  Title: {
    type: String,
    required: true
  },
  Desciption: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Updates", UpdatesSchema);
