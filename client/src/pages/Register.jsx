import { NavLink } from "react-router-dom";
import avatar from "/images/profile.jpg";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { registerValidate } from "../helpers/Validate";
import { useState } from "react";
import convertToBase64 from "../helpers/ImgConverter";
import { registerUser } from "../helpers/Helper";
import { useNavigate } from "react-router-dom";
import usePasswordToggle from "../hooks/usePasswordToggle";
const Register = () => {
  const [file, setFile] = useState();
  const [inputType,toggleIcon,toggleVisibility] = usePasswordToggle();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        values = await Object.assign(values, { profile: file || "" });
        console.log(values);
    
        let registerPromise = registerUser(values);
        console.log('registerPromise:', registerPromise);
    
        toast.promise(
          registerPromise,
          {
            lpending: "Creating...",
            success: "Register Successfully...!",
            error: "Could not Register.",
          }
        );
        registerPromise.then(function(){ navigate('/login')});
      } catch (error) {
        // Handle any unexpected errors here
        console.error('An error occurred:', error);
      }
    },
  });

  const MAX_FILE_SIZE = 5 * 1024 * 1024;
  const onUpload = async (e) => {
    const file = e.target.files[0];
  if (file.size > MAX_FILE_SIZE) {
    // Display an error message or prevent the upload
    console.error('File size exceeds the limit');
    return;
  }
  const base64 = await convertToBase64(file);
  setFile(base64);
  };
  return (
    <div
      style={{
        background: "#E4E4E4",
        backgroundImage: `url(" /images/Background.png")`,
      }}
    >
      <Wrapper className="container mx-auto">
        <div className="flex-div">
          <div className="glass">
            <div className="title">
              <h4>Register</h4>
              <span className="greetings">Happy to Join you!</span>
            </div>
            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile">
                <label htmlFor="profile">
                  <img
                    src={file || avatar}
                    className="profile-img"
                    alt="avatar"
                  />
                </label>
                <input
                  onChange={onUpload}
                  type="file"
                  id="profile"
                  name="profile"
                />
              </div>

              <div className="text-box">
                <input
                  className="i-box"
                  type="email"
                  placeholder="Email*"
                  {...formik.getFieldProps("email")}
                />
                <input
                  className="i-box"
                  type="text"
                  placeholder="Username*"
                  {...formik.getFieldProps("username")}
                />

<div className=" flex-box">
                <input
                  className="i-box-p"
                  type={inputType}
                  placeholder="Password*"
                  {...formik.getFieldProps("password")}
                /> <span className="btn1" onClick={toggleVisibility}>
                  {toggleIcon}
                </span></div>
                <button className="btn" type="submit">
                  Register
                </button>
              </div>

              <div className="title">
                <span className="greetings">
                  Already register?
                  <NavLink to="/login">Login Now</NavLink>
                </span>
              </div>
            </form>
          </div>
        </div>
      </Wrapper>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

const Wrapper = styled.section`
  .container {
    width: 100%;
    
  }

  @media (min-width: 375px) {
    .container {
      max-width: 375px;
    }
    .glass {
      min-width: 70%;
    }
  }
  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
    .glass {
      min-width: 50%;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 768px;
    }
    .glass {
      min-width: 50%;
    }
  }
  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
    }
    .glass {
      max-width: 40%;
    }
  }
  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
    .glass {
      min-width: 30%;
    }
  }

  .mx-auto {
    margin-right: auto;
    margin-left: auto;
  }
  .flex-div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .glass {
    background: rgba(255, 255, 255, 0.55);
    border-radius: 16px;
    box-shadow: 0 4px 30px #4747470b;
    backdrop-filter: blur(7.1px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding-left: 1.75rem;
    padding-right: 1.75rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    flex-shrink: 0;
    border-radius: 1.5rem;
    border-width: 4px;
    border-color: #f9fafb;
    /* height: 75%; */
    width: 40%;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      h4 {
        font-size: 3rem;
        line-height: 1;
        font-weight: 700;
      }
      .greetings {
        padding-top: 1rem;
        padding-bottom: 1rem;
        width: 66.666667%;
        font-size: 1.25rem;
        line-height: 1.75rem;
        text-align: center;
        color: #6b7280;
      }
    }
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .profile {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
    justify-content: center;
    .profile-img {
      border-radius: 999px;
      max-width: 130px;
      max-height: 130px;
      object-fit: cover;
      border-width: 4px;
      border-color: #f3f4f6;
      cursor: pointer;
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      width: 130px;
      &:hover {
        border-color: #e5e7eb;
      }
    }
  }
  .text-box {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    .i-box {
      text-transform:none;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      border-radius: 0.75rem;
      border-width: 0;
      width: 75%;
      font-size: 1.125rem;
      line-height: 1.75rem;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    .btn {
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-radius: 0.5rem;
      border-width: 0.5px;
      width: 75%;
      font-size: 1.25rem;
      line-height: 1.75rem;
      text-align: center;
      color: #f9fafb;
      background-color: #6366f1;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      &:hover {
        box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        transform: scale(0.96);
      }
    }
    .flex-box{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  .i-box-p {
      text-transform: none;
      padding-top: 1rem;
      padding-bottom: 1rem;
       padding-left: 1.25rem;
      padding-right: 1.25rem; 
      border-top-left-radius: 0.75rem;
      border-bottom-left-radius: 0.75rem;
      border-width: 0;
      outline: none;
      width: 55%;
      font-size: 1.125rem;
      line-height: 1.75rem;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
    .btn1 {
      padding-top: 1rem;
      padding-bottom: 1rem;
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
      /* border-width: 0.5px; */
      border: none;
      width: 20%;
      font-size: 1.75rem;
      line-height: 1rem;
      text-align: center;
      cursor: pointer;
      /* color: #f9fafb; */
      /* background-color: #6366f1; */
      background-color: #ffffff;
      border: none;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease 0s;
      -moz-transition: all 0.3s ease 0s;
      -o-transition: all 0.3s ease 0s;
      &:hover {
        box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
      }
    }
  }
  }
  input[type="file"] {
    display: none;
  }
`;

export default Register;
