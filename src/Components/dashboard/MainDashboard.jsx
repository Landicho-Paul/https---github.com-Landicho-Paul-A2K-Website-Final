import React from "react";

import { useState, useEffect } from "react";

import axios from "axios";
// import LogSignup from '../loginSignup/logSignup'
import Css from "./dashboardCSS/Maindashboard.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import Card from "./util/card";

const MainDashboard = () => {
  const [boarName, setBoardName] = useState("");
  const [boardPosition, setBoardPosition] = useState("");
  const [boardData, setBoardData] = useState([]);
  const [boardImage, setBoardImage] = useState("");
  const [wallpaper, Setwallpaper] = useState([]);
  const [wallpapertext, SetwallpaperText] = useState("");
  const [wallpapertitle, SetwallpaperTitle] = useState("");
  const [wallpaperId, SetwallpaperId] = useState("");
  const [specialText, setSpecialText] = useState("");


  const [special, setSpecial] = useState([]);
  const [imageSpecialize, setImageSpecialize] = useState(null);
  const [image, setImage] = useState(null);
  const Server = "http://localhost:3001";

  useEffect(() => {
    Walpaperdatas();
    Specializedatas();
    Boarddatas();
  }, []);

  //Create Boardmember


  const deleteBoard = async (id) => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/maindashboard/deleteBoard`,
      data: {
        _id: id,
      },
    });

    if (result.data.status) {
      alert("Successfully Deleted");
      await Boarddatas();
    }
  };

  //getdata board
  const Boarddatas = async () => {
    const result = await axios({
      method: "GET",
      url: `${Server}/admin_accounts/maindashboard/getBoard`,
    });

    setBoardData(result.data)
  };
  //create
  const boardmembersubmit = async (e) => {
    e.preventDefault();

    if (!boardImage || !boarName || !boardPosition) {
      alert("Please Complete the inputs");
      return;
    }

    const formData = new FormData();
    formData.append("image", boardImage);
    formData.append("name", boarName);
    formData.append("position", boardPosition);

    try {
      const result = await axios.post(
        `${Server}/admin_accounts/maindashboard/createBoard`,
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

      Boarddatas();
      alert("Successfully Added");
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          alert("Already exists");
        } else if (err.response.status === 500) {
          alert("Internal Server Error");
        } else {
          alert(`Error: ${err.response.status} ${err.response.statusText}`);
        }
      } else {
        alert(`Error: ${err.message}`);
      }
      console.error("Error during image upload:", err);
    }
  };

  //delete

  const deleteSpecialize = async (id) => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/maindashboard/deleteSpecialize`,
      data: {
        _id: id,
      },
    });

    if (result.data.status) {
      alert("Successfully Deleted");
      await Specializedatas();
    }
  };
  //getdata Specialize
  const Specializedatas = async () => {
    const result = await axios({
      method: "GET",
      url: `${Server}/admin_accounts/maindashboard/getSpecialize`,
    });

    setSpecial(result.data);

    
  
    
  };

  //Create Specialize
  const Specializersubmit = async (e) => {
    e.preventDefault();

    if (!imageSpecialize || !specialText) {
      alert("Please Complete the inputs");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageSpecialize);
    formData.append("text", specialText);

    try {
      const result = await axios.post(
        `${Server}/admin_accounts/maindashboard/createSpecialize`,
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

      Specializedatas();
      alert("Successfully Added");
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          alert("Already exists");
        } else if (err.response.status === 500) {
          alert("Internal Server Error");
        } else {
          alert(`Error: ${err.response.status} ${err.response.statusText}`);
        }
      } else {
        alert(`Error: ${err.message}`);
      }
      console.error("Error during image upload:", err);
    }
  };

  const Walpaperdatas = async () => {
    const result = await axios({
      method: "GET",
      url: `${Server}/admin_accounts/maindashboard/getWallpaper`,
    });
    SetwallpaperTitle(result.data[0].title);
    Setwallpaper(result.data);
    SetwallpaperText(result.data[0].text);
    SetwallpaperId(result.data[0]._id);
  };
  //Create Wallpaper
  const wallpapersubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please Complete the inputs");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      const result = await axios.post(
        `${Server}/admin_accounts/maindashboard/createwallpaper`,
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

      Walpaperdatas();
      alert("Successfully Added");
    } catch (err) {
      if (err.response) {
        if (err.response.status === 400) {
          alert("Already exists");
        } else if (err.response.status === 500) {
          alert("Internal Server Error");
        } else {
          alert(`Error: ${err.response.status} ${err.response.statusText}`);
        }
      } else {
        alert(`Error: ${err.message}`);
      }
      console.error("Error during image upload:", err);
    }
  };
  //update Wallpaper
  const wallpaperUpdate = async (e) => {
    e.preventDefault();

    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/maindashboard/update`,
      data: {
        _id: wallpaperId,
        set: {
          text: wallpapertext,
          title:wallpapertitle
        },
      },
    });

    if (result.status) {
      alert("Validation updated");
       
    } else {
      console.log(result);
      alert("Validation Failed");
    }
  };
  //delete

  const deleteWallpaper = async (id) => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/maindashboard/delete`,
      data: {
        _id: id,
      },
    });

    if (result.data.status) {
      alert("Successfully Deleted");
      await Walpaperdatas();
    }
  };

  return (
    <>
      {/* <Navbar/>
      <Sidebar/> */}
      <div className={Css.wallpaper}>
        <div className={Css.upper}>
          <h1 className={Css.h1Main}>Wallpaper</h1>
          <div className={Css.SpecializedInput}>
            <input
              className={Css.inputs}
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
            />
          </div>

          <button className={Css.buttoninMain} onClick={wallpapersubmit}>
            Add
          </button>
        </div>
        <div className={Css.wallpaperSentence}>
          <div className={Css.box}>
            <label className={Css.text}> TEXT</label>
            <textarea
              onChange={(e) => SetwallpaperText(e.target.value)}
              name=""
              className={Css.textareainput}
              value={wallpapertext}
              id=""
            ></textarea>
            <label className={Css.text}> TITLE</label>
            <textarea
              onChange={(e) => SetwallpaperTitle(e.target.value)}
              name=""
              className={Css.textareainput}
              value={wallpapertitle}
              id=""
            ></textarea>
            <button
              onClick={wallpaperUpdate}
              className={Css.buttoninMain}
              id={Css.buttonupdate}
            >
              Update
            </button>
          </div>
        </div>
        <div className={Css.lower}>
          {wallpaper
            .filter((wallPaper) => {
              if (wallPaper._id === "6695323b4c0d2a717388cfda") {
                return false;
              }

              return true;
            })
            .map((wallPaper) => {
              return (
                <div className={Css.picturecontainer} key={wallPaper._id}>
                  <img
                    className={Css.wallpaperimage}
                    src={`${Server}/image/wallpaper/${wallPaper.image} `}
                    alt=""
                  />
                  <button
                    className={Css.buttondelete}
                    onClick={() => deleteWallpaper(wallPaper._id)}
                  >
                    <RiDeleteBin5Line />
                  </button>
                </div>
              );
            })}
        </div>
        <div className={Css.Specialize}>
          <div className={Css.upper}>
            <h1 className={Css.h1Main}>Specialize</h1>
            <div className={Css.SpecializedInput}>
              <input
                className={Css.inputs}
                placeholder="Text"
                type="text"
                value={specialText}
                onChange={(e) => setSpecialText(e.target.value)}
              />
            </div>
            <div className={Css.SpecializedInput}>
              <input
                className={Css.inputs}
                type="file"
                onChange={(e) => setImageSpecialize(e.target.files[0])}
              />
            </div>

            <button className={Css.buttoninMain} onClick={Specializersubmit}>
              Add
            </button>
          </div>
          <div className={Css.lower}>
            {special.map((Specialize) => {
              return (
                <div className={Css.picturecontainer} key={Specialize._id}>
                  <img
                    className={Css.wallpaperimage2}
                    src={`${Server}/image/Specialize/${Specialize.image} `}
                    alt=""
                  />
                  <textarea
                    value={Specialize.text}
                    onChange={(e) => {}}
                    name=""
                    className={Css.Specializeinput}
                    id=""
                  ></textarea>
                  <div className={Css.Specialbutton}>
                    <button
                      className={Css.buttondelete}
                      onClick={() => {
                        deleteSpecialize(Specialize._id);
                      }}
                    >
                      <RiDeleteBin5Line />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={Css.boardMember}>
          <div className={Css.upper}>
            <h1 className={Css.h1Main}>Board Member</h1>
            <div className={Css.SpecializedInput}>
              <input
                className={Css.inputs}
                placeholder="Name"
                type="text"
                onChange={(e) => setBoardName(e.target.value)}
              />
            </div>
            <div className={Css.SpecializedInput}>
              <input
                className={Css.inputs}
                placeholder="Position"
                type="text"
                onChange={(e) => setBoardPosition(e.target.value)}
              />
            </div>
            <div className={Css.SpecializedInput}>
              <input
                className={Css.inputs}
                type="file"
                onChange={(e) => setBoardImage(e.target.files[0])}
              />
            </div>

            <button className={Css.buttoninMain} onClick={boardmembersubmit}>
              Add
            </button>
          </div>
          <div className={Css.lower}>
         


          {boardData.map((board) => {
              return (
                <Card Boarddatas={Boarddatas} key={board._id}  _id = { board._id} image = { board.image} name = { board.name} position = { board.position} delete ={deleteBoard} />
              );
            })}
            
            
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
