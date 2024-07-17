import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import Css from "./dashboardCSS/newspage.module.css";
import Modalcreate from "./util/modal/modal-in-news/modalcreate";
import ModalUpdate from "./util/modal/modal-in-news/newsmodalupdate.jsx";
import ModalDelete from "./util/modal/modal-in-news/newsdeletemodal.jsx"
import ButtonCss from "./util/buttonstyle.module.css";
import { RiFileDownloadFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

function NewsPage() {
  const Server = "http://localhost:3001";
  const [title, setTitle] = useState(null);
  const [body, setbody] = useState(null);
  const [id, setId] = useState(null);
  const [deleteId,setDeleteId] = useState(null);
  const [deleteimage, setDeleteImage] = useState(null);
  const [description, setDescription] = useState(null);
  const [date, setDate] = useState(null);
  const [image, setImage] = useState(null);
  const [user, setUser] = useState([]);

  const [search, setSearch] = useState("");

  //Modal variable
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    const result = await axios({
      method: "GET",
      url: `${Server}/admin_accounts/news/getnews`,
    });

    setUser(result.data);
  };

  const deletuser = (newsid) => {
    setDeleteId(newsid);
  };


    // Format date function
    const formatDate = (dateString) => {
      const dateObject = new Date(dateString);
      const month = dateObject.getMonth() + 1;
      const day = dateObject.getDate();
      const year = dateObject.getFullYear();
      return `${month}/${day}/${year}`;
    };

  const deleteUser = async () => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/news/deletenews`,
      data: {
        _id: deleteId,
        image:deleteimage
      },
    });

    if (result.data.status) {
      alert("Successfully Deleted");
      await fetchDatas();
    }
  };
  //validation to post

  const newsValidation = async (_id, Publishing) => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/news/newsvalidation`,
      data: {
        _id,
        set: {
          activation: Publishing,
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

  return (
    <>
      <div className="UpperContainer">
        <div className="upper1">
          <p>News Editor</p>
          <button
            className="button"
            onClick={() => {
              setModalCreate(true);
            }}
          >
            Create
          </button>
        </div>
        <div className="upper2">
          <div className="search">
            <CiSearch color="grey" size="25px" />
            <input
              type="search"
              placeholder="Search button"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="LowerContainer">
        <table className="content-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>IMG</th>
              <th>title</th>
              <th>Description</th>
              <th>Publish Date</th>
              <th>Validation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user
              .filter((user) => {
                return search.toLowerCase() === ""
                  ? user
                  : user.title.toLowerCase().includes(search);
              })
              .map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>
                    <img
                      src={`${Server}/image/newsimage/${user.image}`}
                      className={Css.image}
                      alt="Uploaded"
                    />
                  </td>
                  <td>{user.title}</td>
                  <td>{user.description}</td>
                  <td>{formatDate(user.date)}</td>
                  <td>
                    <button
                      onClick={() => {
                        newsValidation(
                          user._id,
                          user.activation === "1" ? "0" : "1"
                        );
                      }}
                      className={
                        user.activation === "1"
                          ? "buttonInTable"
                          : "buttonInTableReject"
                      }
                    >
                      {user.activation === "1" ? "Published" : "Publish"}
                    </button>
                  </td>
                  <td>
                    <button onClick={() => {
                      setModalDelete(true)
                      setDeleteImage(user.image)
                      deletuser(user._id);
                    }} className={ButtonCss.btndelete}>
                      <MdDelete color="white" />
                    </button>
                    <button
                      onClick={() => {
                        setModalUpdate(true);
                        setTitle(user.title);
                        setbody(user.body);
                        setId(user._id);
                        setDescription(user.description);
                        setDate(user.date);
                        setImage(user.image);
                      }}
                      className={ButtonCss.btnupdate}
                    >
                      <RiFileDownloadFill color="white" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {modalDelete && (
        <ModalDelete deleteUser={deleteUser} setModalDelete={setModalDelete} />
      )}
      {modalCreate && (
        <Modalcreate setModalCreate={setModalCreate} fetchDatas={fetchDatas} />
      )}
      {modalUpdate && (
        <ModalUpdate
          title1={title}
          body1={body}
          image1={image}
          date1={date}
          description1={description}
          id1={id}
          setModalUpdate={setModalUpdate}
          fetchDatas={fetchDatas}
        />
      )}
    </>
  );
}

export default NewsPage;
