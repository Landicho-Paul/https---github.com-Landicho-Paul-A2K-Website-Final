import React,{useState,useEffect} from 'react'
import { CiSearch } from "react-icons/ci";
import Modalcreate from "./util/modal/transformativemodal/tranformativecreatemodal.jsx";
import ModalDelete from "./util/modal/transformativemodal/transdeletemodal.jsx"
import ModalUpdate from "./util/modal/transformativemodal/tranformativeupdatemodal.jsx";
import axios from "axios";
import Css from "./dashboardCSS/newspage.module.css";
import ButtonCss from "./util/buttonstyle.module.css";
import { RiFileDownloadFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";


function Specialized() {
  const Server = "http://localhost:3001";
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [search, setSearch] = useState("");
  const [modalCreate, setModalCreate] = useState(false);
  const [trans, setTrans] = useState([]);
  const [deleteId,setDeleteId] = useState(null);
  const [deleteimage, setDeleteImage] = useState(null);


  //values

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [Stitle, setSTitle] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  




  useEffect(() => {
    fetchDatas();
  }, []);


  const deleteUser = async () => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/trans/delete`,
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

  const deletuser = (newsid) => {
    setDeleteId(newsid);
  };

  const SpecializeValidation = async (_id, Publishing) => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/trans/validation`,
      data: {
        _id,
        set: {
          validation: Publishing,
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

  const fetchDatas = async () => {
    const result = await axios({
      method: "GET",
      url: `${Server}/admin_accounts/trans/gettrans`,
    });

    setTrans(result.data);

  };

  return (
    <>
    <div className="UpperContainer">
        <div className="upper1">
          <p>Transformative Services</p>
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
              <th>Image</th>
              <th>Title</th>
              <th>Secondary title</th>
              <th>Text</th>
              <th>Validation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trans
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
                      src={`${Server}/image/trasformative/${user.image}`}
                      className={Css.image}
                      alt="Uploaded"
                    />
                  </td>
                  <td>{user.title}</td>
                  <td>{user.secondarytitle}</td>
                  <td>{user.text}</td>
                  <td>
                    <button
                      onClick={() => {
                        SpecializeValidation(
                          user._id,
                          user.validation === "1" ? "0" : "1"
                        )
                       
                      }}
                      className={
                        user.validation === "1"
                          ? "buttonInTable"
                          : "buttonInTableReject"
                      }
                    >
                      {user.validation === "1" ? "Published" : "Publish"}
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
                        setId(user._id);
                        setImage(user.image);
                        setSTitle(user.secondarytitle);
                        setText(user.text)
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
      {modalCreate && (
        <Modalcreate setModalCreate={setModalCreate} fetchDatas={fetchDatas} />
      )}
      {modalDelete && (
        <ModalDelete deleteUser={deleteUser} setModalDelete={setModalDelete} />
      )}
            {modalUpdate && (
        <ModalUpdate
          title1={title}
          Stitle1={Stitle}
          image1={image}
          text1={text}
          id1={id}
          setModalUpdate={setModalUpdate}
          fetchDatas={fetchDatas}
        />
      )}
      
    </>

  )
}

export default Specialized
