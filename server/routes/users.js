const express = require("express");
const router = express.Router();
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
/** Post Methods */
router.route("/login").post(verifyUser, userLogin);
router.route("/register").post(userRegister);
// router.route("/registerMail").post(userRegister);
router.route("/authenticate").post((req, res) => res.end());
/** Get Methods */
router.route("/user/:username").get(getUser);
router.route("/register").get(userRegister);
router.route("/generateOTP").get(generateOTP);
router.route("/verifyOTP").get(verifyOTP);
router.route("/createResetSession").get(createResetSession);
/** Put Methods */
router.route("/updateUser").put(updateUser);
router.route("/resetPassword").put(resetPassword);
module.exports = router;
