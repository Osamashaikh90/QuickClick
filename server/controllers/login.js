const RegisterSchema = require("../models/registerSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

/** middleware for verify user */
const verifyUser = async (req, res, next) => {
  try {
    const { username } = req.method == "GET" ? req.query : req.body;

    // check the user existance
    let exist = await RegisterSchema.findOne({ username });
    if (!exist) return res.status(404).send({ error: "Can't find User!" });
    next();
  } catch (error) {
    return res.status(404).send({ error: "Authentication Error" });
  }
};
const userRegister = async (req, res) => {
  try {
    const { username, password, profile, email } = req.body;
    if (!username) {
      throw Error("Please fill username field");
    }
    if (!email) {
      throw Error("Please fill email Field");
    }
    if (!password) {
      throw Error("Please fill password Field");
    }
    const existingUsername = await RegisterSchema.findOne({ username }).exec();
    if (existingUsername) {
      return res.status(400).send({ error: "Please use a unique username" });
    }

    const existingEmail = await RegisterSchema.findOne({ email }).exec();
    if (existingEmail) {
      return res.status(400).send({ error: "Please use a unique email" });
    }

    if (password) {
      bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
          const user = new RegisterSchema({
            username,
            password: hashedPassword,
            profile: profile || "",
            email,
          });

          user
            .save()
            .then((result) =>
              res.status(201).send({ msg: "User Registerd Successfully" })
            )
            .catch((error) => res.status(500).send({ error }));
        })
        .catch((error) => {
          return res.status(500).send({
            error: "Unable to hashed password",
          });
        });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).send({ error: "An error occurred" });
  }
};
//Login
const userLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await RegisterSchema.findOne({ username });

    if (!user) {
      return res.status(404).send({ error: "Username not found" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);

    if (!passwordCheck) {
      return res.status(400).send({ error: "Password does not match" });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
      },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(200).send({
      msg: "Login Successfully",
      username: user.username,
      token,
    });
  } catch (error) {
    console.error("An error occurred:", error);
    return res.status(500).send({ error: "An error occurred" });
  }
};
//getUser
const getUser = async (req, res) => {
  const { username } = req.params;

  try {
    if (!username) return res.status(501).send({ error: "Invalid Username" });

    UserModel.findOne({ username }, function (err, user) {
      if (err) return res.status(500).send({ err });
      if (!user)
        return res.status(501).send({ error: "Couldn't Find the User" });

      /** remove password from user */
      // mongoose return unnecessary data with object so convert it into json
      const { password, ...rest } = Object.assign({}, user.toJSON());

      return res.status(201).send(rest);
    });
  } catch (error) {
    return res.status(404).send({ error: "Cannot Find User Data" });
  }
};
//updateUser
const updateUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(401).send({ error });
  }
};
const generateOTP = async (req, res) => {
  res.json("generateOtp route");
};
const verifyOTP = async (req, res) => {
  res.json("verifyOtp route");
};

//successfully redirect when the OTP is valid
const createResetSession = async (req, res) => {
  res.json("Reset Session route");
};

const resetPassword = async (req, res) => {
  res.json("resetPassword route");
};

module.exports = {
  userLogin,
  userRegister,
  getUser,
  verifyUser,
  updateUser,
  generateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
};
