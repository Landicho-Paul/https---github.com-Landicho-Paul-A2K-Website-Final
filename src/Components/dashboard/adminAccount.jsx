import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./util/container.css";
import { CiSearch } from "react-icons/ci";
import { RiFileDownloadFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import ButtonCss from "./util/buttonstyle.module.css";
import ModalDelete from "./util/modal/modaldelete";
import AccountCreate from "./util/modal/modalcreate";
import AccountUpdate from "./util/modal/modalupdate.jsx";

function AdminAccount() {
  const [firstname, setFname] = useState("");
  const [lastname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const Server = "http://localhost:3001"
  

  const [user, setUser] = useState([]);
  //const [admin, setAdmin] = useState(null);
  //const [currentlog, setCurrentlog] = useState([])
  const [search, setSearch] = useState("");

  //const user1 = ''

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(loggedInUser);
    if (parsedUser.email) {
      // setAdmin(parsedUser.email);
    }

    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    const result = await axios({
      method: "GET",
      url: `${Server}/admin_accounts/fetch`,
    });
    setUser(result.data);
  };

  const deletuser = (userid) => {
    setUserId(userid);
  };

  const updateuser = (userid) => {
    setUserId(userid);
  };

  //delete function
  const deleteUser = async () => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/delete`,
      data: {
        _id: userId,
      },
    });

    if (result.data.status) {
      alert("Successfully Deleted");
      await fetchDatas();
    }
  };

  // validation function

  const newsValidation = async (_id, newsadmin) => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/newsvalidation`,
      data: {
        _id,
        set: {
          newsadmin,
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

  const superAdminValidation = async (_id, superadmin) => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/newsvalidation`,
      data: {
        _id,
        set: {
          superadmin,
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

  const InformationValidation = async (_id, informationadmin) => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/newsvalidation`,
      data: {
        _id,
        set: {
          informationadmin,
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

  const CoverPhotoValidation = async (_id, coverphotoadmin) => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/newsvalidation`,
      data: {
        _id,
        set: {
          coverphotoadmin,
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

  const SpecializedValidation = async (_id, specializedadmin) => {
    const result = await axios({
      method: "POST",
      url: `${Server}/admin_accounts/newsvalidation`,
      data: {
        _id,
        set: {
          specializedadmin,
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

  // end of validation function

  return (
    <>
      <div className="UpperContainer">
        <div className="upper1">
          <p>Accounts</p>
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
        {user.length <= 0 ? (
          ""
        ) : (
          <table className="content-table">
            <thead>
              <tr>
                <th>firstname</th>
                <th>Lastname</th>
                <th>email</th>
                <th>news</th>
                <th>CoverPhoto</th>
                <th>Specialized</th>
                <th>Information</th>
                <th>Super admin</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user
                .filter((user) => {
                  return search.toLowerCase() === ""
                    ? user
                    : user.firstname.toLowerCase().includes(search);
                })
                .map((user) => (
                  <tr key={user._id}>
                    <td>{user.firstname}</td>

                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        onClick={() =>
                          newsValidation(
                            user._id,
                            user.newsadmin === "1" ? "0" : "1"
                          )
                        }
                        className={
                          user.newsadmin === "1"
                            ? "buttonInTable"
                            : "buttonInTableReject"
                        }
                      >
                        {user.newsadmin === "1" ? "Accept" : "Reject"}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          CoverPhotoValidation(
                            user._id,
                            user.coverphotoadmin === "1" ? "0" : "1"
                          )
                        }
                        className={
                          user.coverphotoadmin === "1"
                            ? "buttonInTable"
                            : "buttonInTableReject"
                        }
                      >
                        {user.coverphotoadmin === "1" ? "Accept" : "Reject"}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          SpecializedValidation(
                            user._id,
                            user.specializedadmin === "1" ? "0" : "1"
                          )
                        }
                        className={
                          user.specializedadmin === "1"
                            ? "buttonInTable"
                            : "buttonInTableReject"
                        }
                      >
                        {user.specializedadmin === "1" ? "Accept" : "Reject"}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          InformationValidation(
                            user._id,
                            user.informationadmin === "1" ? "0" : "1"
                          )
                        }
                        className={
                          user.informationadmin === "1"
                            ? "buttonInTable"
                            : "buttonInTableReject"
                        }
                      >
                        {user.informationadmin === "1" ? "Accept" : "Reject"}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          superAdminValidation(
                            user._id,
                            user.superadmin === "1" ? "0" : "1"
                          )
                        }
                        className={
                          user.superadmin === "1"
                            ? "buttonInTable"
                            : "buttonInTableReject"
                        }
                      >
                        {user.superadmin === "1" ? "Accept" : "Reject"}
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setModalOpen(true);
                          deletuser(user._id);
                        }}
                        className={ButtonCss.btndelete}
                      >
                        <MdDelete color="white" />
                      </button>
                      <button
                        onClick={() => {
                          setModalUpdate(true);
                          updateuser(user._id);
                          setFname(user.firstname);
                          setEmail(user.email);
                          setPassword(user.password);
                          setLname(user.lastname);
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
        )}
      </div>

      {modalOpen && (
        <ModalDelete deleteUser={deleteUser} setOpenModal={setModalOpen} />
      )}
      {modalCreate && (
        <AccountCreate
          setmodalCreate={setModalCreate}
          fetchDatas={fetchDatas}
        />
      )}

      {modalUpdate && (
        <AccountUpdate
          fetchDatas={fetchDatas}
          id={userId}
          setModalUpdate={setModalUpdate}
          ffirstname={firstname}
          llastname={lastname}
          ppassword={password}
          eemail={email}
        />
      )}
    </>
  );
}

export default AdminAccount;
