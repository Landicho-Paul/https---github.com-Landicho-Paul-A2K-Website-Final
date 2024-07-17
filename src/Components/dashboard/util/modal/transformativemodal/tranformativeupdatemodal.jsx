import React, { useState, useEffect } from "react";
import Css from "../modaldelete.module.css";
import axios from "axios";
import { IoIosCreate } from "react-icons/io";

function Modalcreate({
  title1,
  Stitle1,
  image1,
  text1,
  id1,
  setModalUpdate,
  fetchDatas,
}) {
  const Server = "http://localhost:3001";
  const [Stitle, setSTitle] = useState("");
  const [id, setId] = useState("");

 
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");


  useEffect(() => {
    setTitle(title1);
    setText(text1);
    setSTitle(Stitle1);
    setId(id1);
  }, [title1, text1, Stitle1, id1]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Stitle || !title || !text) {
      alert("Please Complete the inputs");
      return;
    }

   

    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/trans/update`,
      data: {
        _id: id,
        set: {
          title,
          secondarytitle:Stitle,
          text,
        },
      },
    });

    if (result.data.message === "User updated successfully") {
      alert("News Updated");
      setModalUpdate(false)
      await fetchDatas();
    } else {
      alert("News Failed");
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
            <h1>Update Transformative</h1>
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
                value={Stitle}
                onChange={(e) => setSTitle(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
          <button id={Css.buttonCreate} onClick={handleSubmit}>
            <IoIosCreate />
          </button>

          <div className={Css.foter}></div>
        </div>
      </div>
    </>
  );
}

export default Modalcreate;
