const express = require("express");
const router = express.Router();
const {registerMail} = require("../controllers/mailer")
const {
  userLogin,
  userRegister,
  getUser,
  verifyUser,
  updateUser,
  generateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
} = require("../controllers/login");
const {Auth,localVariables} = require("../middleware/auth");
/** Post Methods */
router.route("/login").post(verifyUser, userLogin);
router.route("/register").post(userRegister);
router.route("/registerMail").post(registerMail);
//tis route is extra iggg
router.route("/authenticate").post(verifyUser,(req, res) => res.end());      
/** Get Methods */
router.route("/user/:username").get(getUser);
router.route("/register").get(userRegister);
//first we verify user and then create a middleware for OTP and generate the otp
router.route("/generateOTP").get(verifyUser,localVariables,generateOTP);
router.route("/verifyOTP").get(verifyUser,verifyOTP);
router.route("/createResetSession").get(createResetSession);   //to reset variables
/** Put Methods */
router.route("/updateUser").put(Auth,updateUser);
router.route("/resetPassword").put(verifyUser,resetPassword);
module.exports = router;
