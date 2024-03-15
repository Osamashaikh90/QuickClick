const RegisterSchema = require("../models/registerSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config(); 
const otpGenerator = require("otp-generator");


//** middleware for verify user */
const verifyUser = async (req, res, next) => {
  try {
    const { username } = req.method == "GET" ? req.query : req.body;

    // check the user existance
    let exist = await RegisterSchema.findOne({ username });
    if (!exist) return res.status(404).send({ error: "Can't find User!" });
    //next means if this middleware is sucessfull then check the next controller provided like login
    next();
  } catch (error) {
    return res.status(404).send({ error: "Authentication Error" });
  }
};

//Register new user
const userRegister = async (req, res) => {
  try {
        const { username, password,email , profile } = req.body

        //check for user
        const existUsername = await RegisterSchema.findOne({username})

        if(existUsername){
            res.status(400).json({error:"Please use unique username"})
        }

        const existEmail = await RegisterSchema.findOne({email})
        if(existEmail){
          res.status(400).json({error:"Please use unique email"})
      }

        //create hash password
        const hashpassword = await bcrypt.hash(password,10)

        //create user
        const newUser = new RegisterSchema({
            username:username,
            password:hashpassword,
            email:email,
            profile:profile || ""
        })

        const saveduser = await newUser.save().then(()=>{ res.status(201).send({ msg: "User Register Successfully" });
        console.log(saveduser);
      }).catch((error)=>{error})
        

  } catch (error) {
    return res.status(500).send({ msg:"total error" });
  }
};

//*Login


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

    // Create JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    return res.status(200).send({
      msg: "Login Successful...!",
      username: user.username,
      token,
    });
  } catch (error) {
    console.error('An error occurred:', error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

//*getUser
const getUser = async (req, res) => {
  const { username } = req.params;

  try {
    if (!username) {
      return res.status(501).send({ error: "Invalid Username" });
    }

    const user = await RegisterSchema.findOne({ username }); // Using await with findOne()

    if (!user) {
      return res.status(501).send({ error: "Couldn't Find the User" });
    }

    // Destructure and remove password before sending the response in json format
    const { password, ...rest } = user.toJSON();

    res.status(201).send(rest);
  } catch (error) {
    console.error(error); // Log the error for debugging purposes
    return res.status(404).send({ error: "Cannot Find User Data" });
  }
};

//updateUser
const updateUser = async (req, res) => {
  try {
    // const id = req.query.id;
    //this user id is coming after the authentication is done using the token

    const {userId} = req.user;
  
    if (userId) {
      const body = req.body;

      const result = await RegisterSchema.updateOne({ _id: userId }, body); // Using await with updateOne()

      res.status(201).send({ msg: "User updated successfully!" });
    } else {
      res.status(401).send({ error: "User Not Found...!" });
    }
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(404).send({ error });
  }
};

//generate OTP
const generateOTP = async (req, res) => {

  req.app.locals.OTP = await otpGenerator.generate(6,{lowerCaseAlphabets:false,upperCaseAlphabets:false,specialChars:false});
  res.status(201).send({code: req.app.locals.OTP})
};

//when we get the otp we want to verify it so to pass the otp to verifyOTP func
//will create a local variable middleware just like we created for auth
//Verify OTP
const verifyOTP = async (req, res) => {
  const {code} = req.query;
  if(parseInt(req.app.locals.OTP) === parseInt(code)){
  req.app.locals.OTP = null; //verified so hum null kardenge, phir new OTP old OTP main add na ho
  req.app.locals.resetSession = true; //start the session
  res.status(201).send({msg:"Verified Successfully!"}) 
  }
  return res.status(400).send({error:"Invalid OTP!"}) 
};

//successfully redirect when the OTP is valid
const createResetSession = async (req, res) => {
  if(req.app.locals.resetSession){
  req.app.locals.resetSession = false
  return res.status(201).send({msg:"Access granted!"})
  }
  return res.status(440).send({error:"Session Expired!"});
};

const resetPassword = async (req, res) => {
  try {

    //we are allowed to reset the password during the session only
    if(!read.app.locals.resetSession) return res.status(440).send({error:"Session Expired!"});
    const { username, password } = req.body;

    // Find user by username
    const user = await RegisterSchema.findOne({ username }); // Using await with findOne()

    if (!user) {
      return res.status(404).send({ error: "Username not found!" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user password
    await RegisterSchema.updateOne({ username }, { password: hashedPassword });

    res.status(201).send({ msg: "Password updated!" });
  } catch (error) {
    res.status(500).send({ error: "An error occurred while resetting password." });
  }
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



