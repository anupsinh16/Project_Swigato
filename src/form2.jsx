import { Button, colors, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "./form2.css";
import { red } from "@mui/material/colors";

const initialState = {
  name: "",
  email: "",
  password: "",
  cnf_password: "",
};

const Form2 = () => {
  const [isMember, setIsMember] = useState(false);
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onHandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const registerUser = async (currentUser) => {
    try {
      const response = await axios.post(
        `https://project-swigato-swej.vercel.app/api/signup`,
        currentUser
      );
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        navigate("/foods");
        location.reload();
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data);
    }
  };

  const loginUser = async (currentUser) => {
    try {
      const response = await axios.post(
        `https://project-swigato-swej.vercel.app/api/login`,
        currentUser
      );
      const { user, token } = response.data;
      addUserToLocalStorage({ user, token });
      if (user) {
        navigate("/foods");
        location.reload();
      }
    } catch (e) {
      console.log(e);
      setError(e.response.data);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, cnf_password } = values;
    console.log(name);
    const currentUser = { name, email, password, cnf_password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };
  return (
    <div className="contact-form">
      <br/>
      <h2 style={{color :"blue"}}>Login/Signup</h2>
      
      <div className="container">
        <form onSubmit={onSubmit}>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          {!isMember && (
            <div>
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
                required
                name="name"
                value={values.name}
                onChange={onHandleChange}
              />
            </div>
          )}
          <div>
            <TextField
              id="standard-basic"
              label="Email"
              type="email"
              variant="standard"
              name="email"
              required
              value={values.email}
              onChange={onHandleChange}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="Password"
              type="password"
              name="password"
              variant="standard"
              required
              onChange={onHandleChange}
            />
          </div>
          {!isMember && (
            <div>
              <TextField
                id="standard-basic"
                label="Confirm Password"
                name="cnf_password"
                type="password"
                variant="standard"
                required
                onChange={onHandleChange}
              />
            </div>
          )}
          <br/>
          <Button variant="contained" type="submit">
            {isMember ? "Login" : "Register"}
          </Button>
          {isMember && (
            <p className="login-register-text">
              Don't have an account? Please
              <span
                className="login-register-link"
                onClick={() => setIsMember(!isMember)}
              >
                Register
              </span>
            </p>
          )}
          {!isMember && (
            <p className="login-register-text">
              Already have an account? Please
              <span
                className="login-register-link"
                onClick={() => setIsMember(!isMember)}
              >
                Login
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form2;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function Form2() {
  

//   return (
//     <>
//     <div id='signin'>
//       <form action='#'>
//             <div>
//                 <h1 style={{color:"crimson"}}>Sign-In</h1>
//             </div>
//             <br/>

//             <div class="mb-3">
//                 <label for="exampleInputEmail1" class="form-label">Email address</label>
//                 <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//                 <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//             </div>
//             <div class="mb-3">
//                 <label for="exampleInputPassword1" class="form-label">Password</label>
//                 <input type="password" class="form-control" id="exampleInputPassword1"/>
//             </div>
//             {/* <div class="mb-3 form-check">
//                 <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//                 <label class="form-check-label" for="exampleCheck1">Check me out</label>
//             </div> */}
//             <button type="submit" class="btn btn-primary">Submit</button>
//             <br/><br/><br/>
//             <p>If you dont have account <a href='/register'>Click Here</a></p>
//         </form>
//     </div>
//     </>
//   )
// }

// export default Form2
