import React, { useState,useEffect } from "react";
import Css from "../modaldelete.module.css";
import axios from "axios";
import { IoIosCreate } from "react-icons/io";
const currentDate = new Date().toISOString().split('T')[0]; 

function Modalcreate({ setModalUpdate, fetchDatas, title1,
    body1,
    image1,
    date1,
    description1,
    id1}) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState("");


  useEffect(() => {
    setImage(image1);
    setTitle(title1);
    setDescription(description1);
    setDate(date1);
    setBody(body1);
    setId(id1);
  }, [image1, title1, description1,date1,body1,id1]);




  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!image || !title || !description || !date || !body) {
  //     alert("Please Complete the inputs");
  //     return;
  //   } 

  //     const formData = new FormData();
  //     formData.append("image", image);
  //     formData.append("title", title);
  //     formData.append("description", description);
  //     formData.append("date", date);
  //     formData.append("activation", "0");
  //     formData.append("body", body); // Assuming you also need to send 'body'

  //     try {
  //       const result = await axios.post(
  //         "http://localhost:3001/admin_accounts/news/createnews",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );

  //       const data = result.data;

  //       console.log(data);

  //       if (data.success === false) {
  //         alert("Something went wrong");
  //         return;
  //       }
  //       fetchDatas();
  //       setModalUpdate(false);
  //       alert("Successfully Registered");
        
  //     } catch (err) {
  //       if (err.message === "Request failed with status code 400") {
  //         alert("already exist");
  //       }

  //       console.log(err.message);
  //     }
    
  // };

  const handleSubmit = async (e) => {


    e.preventDefault();

    if (!image || !title || !description || !date || !body) {
      alert("Please Complete the inputs");
      return;
    } 


    const formData = new FormData();
      formData.append("image", image);
    
    const result = await axios({
      method: "POST",
      url: "http://localhost:3001/admin_accounts/news/updatenews",
      data: {
        _id: id,
        set: {
          title,
          image,
          description,
          date,
          body
          
        },
      },
    });

    if (result.data.message == "User updated successfully") {
      
      alert("News Updated");
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
                setModalUpdate(false)
              }}
            >
              ×
            </button>
          </div>
          <div className={Css.title}>
            <h1>Create Account</h1>
            
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
                placeholder="Description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                autoComplete="off"
              />
            </div>

            <div className={Css.inputContainer}>
              {/* <img src={user_icon} alt="" /> */}
              <hr className={Css}></hr>
              <input
                type="date"
                className={Css.input}
                placeholder="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                autoComplete="off"
                max={currentDate}
              />
            </div>



            {/* <div className={Css.inputContainer}> */}
              <label id={Css.textareallabel}>Body</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                name=""
                id={Css.textarea}
                className={Css.input}
              />
            {/* </div> */}
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
