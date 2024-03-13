import axios from "axios";
// const jwt_decode = require("jwt-decode");
axios.defaults.baseURL = import.meta.env.VITE_SERVER_DOMAIN;

/** To get username from Token */
// export async function getUsername(){
//   const token = localStorage.getItem('token');
//   if(!token) return Promise.reject("Cannot find Token");
//   let decode = jwt_decode(token);
//   return decode;
// }
//authenticate function
export const authenticate = async (username) => {
  try {
    return await axios.post("/auth/authenticate", { username });
  } catch (error) {
    return { error: "Username doesn't exist...!" };
  }
};

//get user details
export const getUser = async ({ username }) => {
  try {
    const { data } = await axios.get(`/auth/user/${username}`);
    return { data };
  } catch (error) {
    return { error: "password doesn't match...!" };
  }
};

//register user
export const registerUser = async (credentials) => {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post("/auth/register", credentials);
    let { username, email } = credentials;

    // send mail
    if (status == 201) {
      await axios.post("/auth/registerMail", { username, userEmail: email });
    }
    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject({ error });
  }
};

//login user
// export const loginUser = async ({ username, password }) => {
//   try {
//     // Verify user and authenticate
//     const loginResponse = await axios.post("/auth/login", {
//       username,
//       password,
//     });

//     // If verification and authentication are successful, return data
//     if (loginResponse && loginResponse.data) {
//       return Promise.resolve({ data: loginResponse.data });
//     } else {
//       return Promise.reject({ error: "Username or password is incorrect...!" });
//     }
//   } catch (error) {
//     // Handle any other errors
//     return Promise.reject({ error: "An error occurred during login...!" });
//   }
// };

export const loginUser = async ({ username, password }) => {
  try {
    const loginResponse = await axios.post("/auth/login", {
      username,
      password,
    });
console.log( {data: loginResponse.data})
    return Promise.resolve({ data: loginResponse.data });
  } catch (error) {
    return Promise.reject(error.response.data); // Adjusted to return error data
  }
};


//uopdate user
export const updateUser = async (response) => {
  try {
    //get the
    const token = localStorage.getItem("token");
    const data = await axios.put("auth/updateUser", response, {
      headers: { Authorization: `Bearer${token}` },
    });
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Coudn't Update Profile...!" });
  }
};

//generate otp
export const genearateOTP = async (username) => {
  try {
    const {
      data: { code },
      status,
    } = await axios.get("/auth/generateOTP", { params: { username } });
    if (status === 201) {
      let {
        data: { email },
      } = await getUser({ username });
      let text = `Your Password Recovery OTP is ${code}. Verify and recover your Password.`;
      await axios.post("/auth/registerMail", {
        username,
        userEmail: email,
        text,
        subject: "Password recovey OTP",
      });
    }
    return Promise.resolve(code);
  } catch (error) {
    return Promise.reject({ error });
  }
};

//verify OTP,
export const verifyOTP = async ({username,code}) => {
    try {
     const {data,status} =  await axios.get('/auth/verifyOTP',{params:{username,code}});
     return {data,status};
    } catch (error) {
      return Promise.reject(error);
    }
  };

//reset password
export const resetPassword = async ({ username, password }) => {
    try {
     const {data,status} = await axios.put('/auth/resetPassword',{username,password})
     return Promise.resolve({data,status});
    } catch (error) {
      // Handle any other errors
      return Promise.reject({ error});
    }
  };


