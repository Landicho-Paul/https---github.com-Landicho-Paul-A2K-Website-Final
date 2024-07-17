import React from "react";
import deletemodal from "../modal/modaldelete.module.css";

const modaldelete = ({ setOpenModal, deleteUser }) => {
  return (
    <div className={deletemodal.modalBackground}>
      <div className={deletemodal.modalContainer}>
        <div className={deletemodal.titleCloseBtn}>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            ×
          </button>
        </div>
        <div className={deletemodal.title}></div>
        <div className={deletemodal.body}>
          <h1 className={deletemodal.delete}>Are You Sure You want to delete?</h1>
        </div>
        <div className={deletemodal.footer}>
          <button
            onClick={() => {
              deleteUser();
              setOpenModal(false);
            }}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default modaldelete;
