
const mongoose = require("mongoose");

const { Schema } = mongoose;

const registerSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    unique:[ true,"Username Exist"],
  },
  password: {
    type: String,
    require: [true, "Please enter your password."],
    unique: false,
  },
  email: {
    type: String,
    require: [true, "Please provide a uniuqe email"],
    unique: true,
  },
  profile: { type: String },
  mobile: { type: Number },
});

module.exports = mongoose.model("RegisterSchema", registerSchema);
