import React, { useState } from "react";
import Css from "../modaldelete.module.css";
import axios from "axios";
import { IoIosCreate } from "react-icons/io";

function Modalcreate({ setModalCreate, fetchDatas }) {
  const [secondarytitle, setStitle] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!secondarytitle || !title || !text || !image ) {
      alert("Please Complete the inputs");
      return;
    } 

      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("text", text);
      formData.append("secondarytitle", secondarytitle);
      formData.append("validation", "0");
      

      try {
        const result = await axios.post(
          "http://localhost:3001/admin_accounts/trans/createtrans",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const data = result.data;
        

        

        if (data.success === false) {
          alert("Something went wrong");
          return;
        }
        fetchDatas();
        setModalCreate(false);
        alert("Successfully Registered");
        
      } catch (err) {
        if (err.message === "Request failed with status code 400") {
          alert("already exist");
        }
        console.log(err)

        
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
                setModalCreate(false);
              }}
            >
              ×
            </button>
          </div>
          <div className={Css.title}>
            <h1>Create Transformative</h1>
          </div>

          <div className={Css.body}>
            <div className={Css.inputContainer}>
              <input
                type="text"
                className={Css.input}
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className={Css.inputContainer}>
              <input
                type="text"
                className={Css.input}
                placeholder="Text"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className={Css.inputContainer}>
              {/* <img src={user_icon} alt="" /> */}
              <hr className={Css}></hr>
              <input
                type="text"
                className={Css.input}
                placeholder="Secondary title"
                required
                value={secondarytitle}
                onChange={(e) => setStitle(e.target.value)}
                autoComplete="off"
                
              />
            </div>

            <div id={Css.filebox} className={Css.inputContainer}>
              {/* <img src={user_icon} alt="" /> */}
              <hr className={Css}></hr>
              <input
                type="file"
                className={Css.input}
                placeholder="file"
                required
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                autoComplete="off"
              />
            </div>

           
          </div>
          <button id={Css.buttonCreate} onClick={handleSubmit}>
              <IoIosCreate />
            </button>

          <div className={Css.foter}>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Modalcreate;
