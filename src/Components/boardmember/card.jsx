import React from 'react';
import CssCard from "../boardmember/board.module.css"


const PersonCard = ({ name, position, image }) => {
    const Server = "http://localhost:3001";
    
  return (
    <div className={CssCard.personCard}>
      <img  src={`${Server}/image/boardmember/${image}`} alt={name} className={CssCard.personImage} />
      <p className={CssCard.title}>{name}</p>
      <p className={CssCard.position}>{position}</p>
    </div>
  );
};

export default PersonCard;