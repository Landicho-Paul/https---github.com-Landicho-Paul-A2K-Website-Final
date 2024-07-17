import React, { useState, useEffect } from "react";
import "./logSignup.css";
import user_icon from "../Assets/image/person.png";
import email_icon from "../Assets/image/email.png";
import password_icon from "../Assets/image/password.png";
import twitter_logo from "../Assets/image/twitter-logo.png";
import facebook_logo from "../Assets/image/facebook-logo.png";
import A2k_logo from "../Assets/image/A2k_logo.png";
import axios from "axios";
import { useNavigate, Outlet } from "react-router-dom";
import { signInStart, signInSuccess } from "../../redux/user/userSlice.jsx";
import { useDispatch} from "react-redux";





const LogSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = !!localStorage.getItem("root");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);


  useEffect(() => {
    isAuthenticated ? navigate("/index/dashboard") : <Outlet />;
  }, [isAuthenticated, navigate]);

  // State to track the current action (Login or Sign Up)
  const [action, setAction] = useState("Login");

  // State to set the sentence displayed on the form
  const [sentence, setSentence] = useState(
    "Welcome Back, Please login to your account."
  );

  // State variables for form inputs
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to clear all input fields
  const clearInputs = () => {
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  };
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the action is Sign Up
    if (action === "Sign Up") {
      if (!firstname || !lastname || !email || !password) {
        alert("Please complete all fields");
      } else if (password.length < 8) {
        alert("Password must be at least 8 characters");
      } else {
        try {
          setLoading(true);
          setError(false);

          axios
            .post("http://localhost:3001/admin_accounts/auth/log", {
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: password,
              superadmin: "0",
              newsadmin: "0",
              specializedadmin: "0",
              coverphotoadmin: "0",
              informationadmin: "0",
            })
            .then((result) => {
                const data = result.data;
              
              clearInputs();
              setLoading(false);
              
              if(data.success === false){
                setError(true);
                return;
              }
              alert("Successfully Registered");
              setAction("Login");
              setSentence("Welcome Back, Please login to your account.");
            })
            .catch((err) => console.log(err));
            
            
        } catch (err) {
            setLoading(true);
            setError(true)
        }
      }
    }
    // Check if the action is Login
    else if (action === "Login") {
      if (!email || !password) {
        alert("Please complete all fields");
      } else {
        dispatch(signInStart())
        axios
          .post("http://localhost:3001/admin_accounts/auth/login", {
            email,
            password,
          })
          .then((result) => {
            
            dispatch(signInSuccess(result.data))
            if (result.status === 200) {
              const token = result;
              localStorage.setItem("token", token);
              localStorage.setItem("user", result.config.data);
              
              
              navigate("/index/dashboard");  
            } else {
              alert("Login Failed");
             // dispatch(signInFailure(result.message))
            }
          })
          .catch((err) => alert('login failed'));
      }
    }
  };

  // Handle click event for Register button
  const OnclickRegister = (e) => {
    e.preventDefault();
    if (action !== "Sign Up") {
      handleSubmit(e);
    } else {
      clearInputs();
      setAction("Login");
      setSentence("Welcome Back, Please login to your account.");
    }
  };

  // Handle click event for Login button
  const OnclickLogin = (e) => {
    e.preventDefault();
    if (action !== "Login") {
      handleSubmit(e);
    } else {
      clearInputs();
      setAction("Sign Up");
      setSentence("Welcome! Let's get started with creating your account.");
    }
  };

  return (
   
    <div className="container"> 
    
      <div className="image_container">
        <img className="image_login" src={A2k_logo} alt="" />
      </div>

      <div className="header">
        <div className="text">{action}</div>
        <p>{sentence}</p>
      </div>

      <form className="inputs">
        {/* Conditionally render input fields based on action */}
        {action === "Login" ? (
          <div></div>
        ) : (
          <>
            <div className="input">
              
              <hr className="solid"></hr>
              <input
                type="text"
                className="text"
                placeholder="Firstname"
                required
                value={firstname}
                onChange={(e) => setFname(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="input">
              
              <hr className="solid"></hr>
              <input
                type="text"
                className="text"
                placeholder="Lastname"
                required
                value={lastname}
                onChange={(e) => setLname(e.target.value)}
                autoComplete="off"
              />
            </div>
          </>
        )}
        <div className="input">
          
          <hr className="solid"></hr>
          <input
            type="email"
            className="text"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <div className="input">
          
          <hr className="solid"></hr>
          <input
            type="password"
            className="text"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="off"
          />
        </div>
      </form>

      <div className="forgot-password">
        Lost Password?<span>Click Here</span>
      </div>
      <p >{error && 'Something has Wrong'}</p>
      <div className="submit-container">
        <div></div>
        <div
          disabled={loading}
          className={action === "Login" ? "submit" : "submit gray"}
          onClick={OnclickLogin}
        >
          {loading ? 'loading...':'Sign Up'}
        </div>
        <div
          className={action === "Sign Up" ? "submit" : "submit gray"}
          onClick={OnclickRegister}
        >
          Login
        </div>
      </div>

      <div className="software">
        {action === "Login" ? <p>or log in with</p> : <p>or register with</p>}
        <div className="software-name">
          <img src={twitter_logo} alt="" />
          <img src={facebook_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LogSignup;
