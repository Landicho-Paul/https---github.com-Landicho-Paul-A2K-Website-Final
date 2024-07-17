import React, { useState } from 'react';
import './pageCSS/tryhome.css';

const Card = ({  image, title, text, onDelete, onUpdate }) => {
    const [editTitle, setEditTitle] = useState(title);
    const [editText, setEditText] = useState(text);
    const handleUpdate = () => {
        onUpdate(editTitle, editText);
      };
  return (
    <div className="card">
            <img src="https://th.bing.com/th/id/R.f48ceff9ab3322d4e84ed12a44c484d1?rik=0KQ6OgL4T%2b9uCA&riu=http%3a%2f%2fwww.photo-paysage.com%2falbums%2fuserpics%2f10001%2fCascade_-15.JPG&ehk=kx1JjE9ugj%2bZvUIrjzSmcnslPc7NE1cOnZdra%2f3pJEM%3d&risl=1&pid=ImgRaw&r=0" alt={title} className="card-image" />
      <div className="card-content">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="card-title-input"
        />
        <textarea
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          className="card-text-input"
        />
        <div className="card-buttons">
          <button onClick={handleUpdate} className="card-button update-button">Update</button>
          <button onClick={onDelete} className="card-button delete-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;