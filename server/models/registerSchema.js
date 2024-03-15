
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
  firstname: { type: String},
  lastname: { type: String},
  mobile : { type : Number},
  address: { type: String},
  profile: { type: String}
});

module.exports = mongoose.model("RegisterSchema", registerSchema);
