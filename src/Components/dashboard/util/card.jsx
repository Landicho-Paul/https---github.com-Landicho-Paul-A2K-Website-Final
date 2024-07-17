import React, { useState } from "react";
import "../dashboardCSS/card.css";


const Card = ({ Boarddatas, _id, name, position, image ,delete:del}) => {
  
  const [value,setvalue] = useState("")
  

  // const handleUpdate = () => {
  //     onUpdate(editTitle, editText);
  //   };
  const Server = "http://localhost:3001";


  return (
    <div className="card" key={_id}>
      <img
       src={`${Server}/image/boardmember/${image} `}
        className="card-image"
      />
      <div className="card-content">
        <label className="labelcard">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setvalue(e.target.value)}
          className="card-title-input"
        />
        <label className="labelcard">Position:</label>

        <textarea
          value={position}
          onChange={(e) => setvalue(e.target.value)}
          className="card-text-input"
        />
        <div className="card-buttons">
          <button onClick={() => {del(_id)}}  className="card-button delete-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
