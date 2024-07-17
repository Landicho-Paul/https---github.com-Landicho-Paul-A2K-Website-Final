import React from 'react';
import './NewsCard.css';
import NewsCss from '../News/newsPages.module.css'

const NewsCard = ({ image, title, description, date}) => {
  const Server = "http://localhost:3001";


      // Format date function
      const formatDate = (dateString) => {
        const dateObject = new Date(dateString);
        const month = dateObject.getMonth() + 1;
        const day = dateObject.getDate();
        const year = dateObject.getFullYear();
        return `${month}/${day}/${year}`;
      };
  
  return (
    <div className={NewsCss.newsCard} >
      <img src={`${Server}/image/newsimage/${image}`} alt={title} className="news-image" />
      <div className={NewsCss.newsContent}>
        <h3 className={NewsCss.newsTitle}>{description}</h3>
        <p className={NewsCss.newsDescription} >{title}</p>
        <div className={NewsCss.newsFooter} >
          <span className={NewsCss.newsDate} >{formatDate(date)}</span>
          <a className={NewsCss.newsLink} >view more</a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;