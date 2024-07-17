import React,{useEffect,useState} from 'react'
import NewsCss from '../News/newsPages.module.css'
import Card from './newscard'
import axios from "axios";


function News() {
  
  const [data, setData] = useState([]);
  const Server = "http://localhost:3001";

  useEffect(() => {
    NewsData();
  }, []);

  const NewsData = async () => {
    const result = await axios({
      method: "GET",
      url: `${Server}/admin_accounts/news/getnewsLimit`,
    });
    console.log(result.data)
    setData(result.data);
  };

  return (
    < >
        <div className={NewsCss.hehe}>
          <div className={NewsCss.upper} >
            <h1 className={NewsCss.title}>NEWS</h1>

          </div>
          <div  className={NewsCss.bottom}>
            <div className={NewsCss.cardContainer} data-aos="fade-up" data-aos-duration="3000" >

           { data .map((news) => {
              return (
                <div className={NewsCss.card} key={news._id}>
              <Card image={news.image} title={news.title} description={news.description} date={news.date} /> 
              </div>
              );
            })}

              

                 

            </div>
            
          </div>
        
        
        </div>
      
    </>
  )
}

export default News
