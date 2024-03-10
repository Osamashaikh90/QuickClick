//Will use this file to Authenticate the user and then allow the user to update the profile
const jwt = require("jsonwebtoken");
require("dotenv").config(); 

const Auth = async(req,res,next)=>{
    try {
        // will first access the authorize header adn it receive the token and then validate the request 
        //and this token will get using the authorization property
        //will get the token with bearer so we eill split the token and store it in the array
        const token = req.headers.authorization.split(" ")[1];

        //based on the token will retrive the data of the used
        const decodedToken = await jwt.verify(token,process.env.JWT_SECRET);

        //now based on this token will get the user 
        req.user = decodedToken;
        //since we dont want need the decodedToken
        //we want the next() func i.e updated user data
        next();
        //op will be
        // {
        //     "userId": "",
        //     "username": "",
        //     "iat": ,
        //     "exp": 
        //   }
    } catch (error) {
        res.status(401).json({error:"Authentication failed"});
    }

};

const localVariables = (req,res,next)=>{
req.app.locals = {
OTP: null,
resetSession : false
}
next();
}

module.exports = {Auth,localVariables};
