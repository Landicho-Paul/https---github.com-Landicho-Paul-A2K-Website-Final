import React,{useEffect,useState} from 'react'
import NewsCss from '../News/newsPages.module.css'
import Card from './newscard'
import axios from "axios";
import 'aos/dist/aos.css';
import Aos from 'aos';




function News() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
    }, []);

  
  const [data, setData] = useState([]);
  const Server = "http://localhost:3001";

  useEffect(() => {
    NewsData();
  }, []);

  const NewsData = async () => {
    const result = await axios({
      method: "GET",
      url: `${Server}/admin_accounts/news/getnews`,
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
          <div  className={NewsCss.bottom}  data-aos="fade-up">
            <div className={NewsCss.cardContainer}>

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
