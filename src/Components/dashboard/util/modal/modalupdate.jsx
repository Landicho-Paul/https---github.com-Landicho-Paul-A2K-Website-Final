import React, { useEffect } from "react";
import Css from "../modal/modaldelete.module.css";
import axios from "axios";
import { useState } from "react";
//import Css2 from "./inputanother.module.css"
import bcryptjs from "bcryptjs";
// import user_icon from "../Assets/image/person.png";
// import email_icon from "../Assets/image/email.png";
// import password_icon from "../Assets/image/password.png";

const AccountUpdate = ({
  id,
  setModalUpdate,
  ffirstname,
  llastname,
  ppassword,
  eemail,
  fetchDatas,
}) => {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setFname(ffirstname);
    setEmail(eemail);
    setPassword(ppassword);
    setLname(llastname);
  }, [ffirstname, llastname, ppassword, eemail]);

  const clearInputs = () => {
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const result = await axios({
      method: "POST",
      url: "http://localhost:3001/admin_accounts/newsvalidation",
      data: {
        _id: id,
        set: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: hashedPassword 
        },
      },
    });

    if (result.data.status) {
      alert("Validation updated");
      await fetchDatas();
    } else {
      alert("Validation Failed");
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    
    const result = await axios({
      method: "POST",
      url: "http://localhost:3001/admin_accounts/newsvalidation",
      data: {
        _id: id,
        set: {
          firstname: firstname,
          lastname: lastname,
          email: email,
        
        },
      },
    });

    if (result.data.status) {
      alert("Validation updated");
      await fetchDatas();
    } else {
      alert("Validation Failed");
    }
  };
  const submit = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      alert("Please complete all fields");
    } else if (password.length < 8) {
      alert("Password must be at least 8 characters");
    } else {
      {ppassword === password ? handleSubmit2(e):handleSubmit(e)}

      clearInputs();

      setModalUpdate(false);
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
                setModalUpdate(false);
              }}
            >
              ×
            </button>
          </div>
          <div className={Css.title}>
            <h1>Updating Account</h1>
          </div>

          <div className={Css.body}>
            <div></div>
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

export default AccountUpdate;
