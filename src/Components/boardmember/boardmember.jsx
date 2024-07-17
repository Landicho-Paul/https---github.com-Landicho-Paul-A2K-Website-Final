import React, { useState, useEffect } from "react";
import BoardCss from "../boardmember/board.module.css";
import Card from "../boardmember/card.jsx";
import axios from "axios";

function Boardmember() {
  const Server = "http://localhost:3001";
  const [boardData, setBoardData] = useState([]);

  useEffect(() => {
    Boarddatas();
  }, []);

  const Boarddatas = async () => {
    const result = await axios({
      method: "GET",
      url: `${Server}/admin_accounts/maindashboard/getBoard`,
    });
    console.log(result.data);
    setBoardData(result.data);
  };

  return (
    <>
      <div className={BoardCss.upper}>
        <h1 className={BoardCss.title}>A2K MANAGEMENT BOARD</h1>
      </div>
      <div className={BoardCss.lower}>
        <div className={BoardCss.imagebackgroudcontainer}>
          <img
            className={BoardCss.image}
            src="https://a2kgroup.org/images/Management%20Board/management-board.jpg"
            alt=""
          />
        </div>
        <div className={BoardCss.cardcontainer}>
          {boardData.map((news) => {
            return (
              <div className={BoardCss.card} key={news._id}>
                <Card
                  key={news._id}
                  image={news.image}
                  position={news.position}
                  name={news.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Boardmember;
