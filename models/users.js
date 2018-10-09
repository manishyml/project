const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for users
const usersSchema = new Schema({
  Employee_Id: {
    type: Number,
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
module.exports = User = mongoose.model("Users", usersSchema);
