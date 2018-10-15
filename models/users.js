const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for users
const usersSchema = new Schema({
  Employee_Id: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  User_Type: {
    type: String
  }
});
module.exports = mongoose.model("Users", usersSchema);
