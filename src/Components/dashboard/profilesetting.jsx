import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Css from "./dashboardCSS/profilesetting.module.css";
import axios from "axios";
import bcryptjs from "bcryptjs";

const Profilesetting = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [iid, setId] = useState("");
  const [ffirstname, setFfname] = useState("");
  const [eemail, setEemail] = useState("");
  const [llastname, setLlastname] = useState("");
  const [ppassword, setPpassword] = useState("");

  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    FetchDatas(currentUser._id);
  }, []);

  useEffect(() => {
    setFname(ffirstname);
    setEmail(eemail);
    setPassword(ppassword);
    setLastname(llastname);
  }, [ffirstname, llastname, ppassword, eemail]);


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const result = await axios({
      method: "POST",
      url: "http://localhost:3001/admin_accounts/newsvalidation",
      data: {
        _id: iid,
        set: {
          firstname: fname,
          lastname: lastname,
          email: email,
          password:  hashedPassword 
        },
      },
      
    });
    
    
    if (result.data.status) {
      alert("Validation updated");
      await FetchDatas();
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
        _id: iid,
        set: {
          firstname: fname,
          lastname: lastname,
          email: email
          
        },
      },
      
    });
    
    
    if (result.data.status) {
      alert("Validation updated");
      await FetchDatas();
    } else {
      alert("Validation Failed");
    }
  };

  const FetchDatas = async (id) => {
    try {
      const result = await axios.get(`http://localhost:3001/admin_accounts/get/${id}`);
      const data = result.data;
      
  

      setFfname(data.firstname);
      setEemail(data.email);
      setLlastname(data.lastname);
      setPpassword(data.password);
      setId(data._id)
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <div className={Css.uppercontainer}>
        <label>YOUR AVATAR</label>
       
        <div className={Css.profiles}>LC</div>
        <div className={Css.buttoncontainer}>
          <button className={Css.Profilesavebutton}>Change Profile</button>
        </div>
      </div>
      <div className={Css.lowercontainer}>
        <div className={Css.inputContainer}>
          <div className={Css.fullname}>
            <div className={Css.name}>
              <label>Firstname</label>
              <input
                type="text"
                onChange={(e) => setFname(e.target.value)}
                value={fname}
              />
            </div>
            <div className={Css.name}>
              <label>Lastname</label>
              <input type="text" onChange={(e) => setLastname(e.target.value)}
                value={lastname} />
            </div>
          </div>

          <label>Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)}
                value={email} />
          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password" />

          <button className={Css.buttonupdate} onClick={ppassword === password ? handleSubmit:handleSubmit2}>Update</button>
        </div>
      </div>
    </>
  );
};

export default Profilesetting;
