import React from "react";
import Css from "../modal/modaldelete.module.css";
import axios from "axios";
import { useState } from "react";
// import user_icon from "../Assets/image/person.png";
// import email_icon from "../Assets/image/email.png";
// import password_icon from "../Assets/image/password.png";

const AccountCreate = ({ setmodalCreate, fetchDatas }) => {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Server = "http://localhost:3001"

  const clearInputs = () => {
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post(
        `${Server}/admin_accounts/auth/log`,
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          superadmin: "0",
          newsadmin: "0",
          specializedadmin: "0",
          coverphotoadmin: "0",
          informationadmin: "0",
        }
      );
      const data = result.data;

      console.log(data);

      if (data.success === false) {
        alert("Something went wrong");
        return;
      }
      fetchDatas();
      alert("Successfully Registered");
    } catch (err) {
      if (err.message === "Request failed with status code 400") {
        alert("alreary exist");
      }

      console.log(err.message);
    }
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      alert("Please complete all fields");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters");
    } else {
      handleSubmit(e);

      clearInputs();

      setmodalCreate(false);
    }
  };

  return (
    <>
      <div className={Css.modalBackground}>
        <div className={Css.modalContainer}>
          <div className={Css.titleCloseBtn}>
            <button
              className={Css.xbutton}
              onClick={() => {
                setmodalCreate(false);
              }}
            >
              ×
            </button>
          </div>
          <div className={Css.title}>
            <h1>Create Account</h1>
          </div>

          <div className={Css.body}>
            <div className={Css.fullname}>
              <div className={Css.inputContainer}>
                <input
                  type="text"
                  className={Css.input}
                  placeholder="Firstname"
                  required
                  value={firstname}
                  onChange={(e) => setFname(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className={Css.inputContainer}>
                <input
                  type="text"
                  className={Css.input}
                  placeholder="Lastname"
                  required
                  value={lastname}
                  onChange={(e) => setLname(e.target.value)}
                  autoComplete="off"
                />
              </div>
            </div>

            <div className={Css.inputContainer}>
              {/* <img src={user_icon} alt="" /> */}
              <hr className={Css}></hr>
              <input
                type="email"
                className={Css.input}
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className={Css.inputContainer}>
              {/* <img src={user_icon} alt="" /> */}
              <hr className={Css}></hr>
              <input
                type="password"
                className={Css.input}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>

          <div className={Css.footer}>
            <button onClick={submit}>Proceed</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCreate;
