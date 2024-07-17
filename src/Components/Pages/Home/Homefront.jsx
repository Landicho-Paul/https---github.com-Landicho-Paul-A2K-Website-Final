import React, { useEffect, useState } from 'react';
import homeCss from './homefront.module.css';
import axios from "axios";
import 'aos/dist/aos.css';
import Aos from 'aos';

const Home = () => {
  const [special, setSpecial] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const Server = "http://localhost:3001";



  
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Specializedatas()
  }, []);


  const Specializedatas = async () => {
    const result = await axios({
      method: "GET",
      url: `${Server}/admin_accounts/maindashboard/getWallpaper`,
    });

    setSpecial(result.data);
    setTitle(result.data[0].title)
    setText(result.data[0].text)
    
    console.log(result.data)

    
  
    
  };

  const images = ["https://a2kgroup.org/images/ANGAD%20LOGO.png", "https://a2kgroup.org/images/ANGAD%20LOGO.png", "https://a2kgroup.org/images/ANGAD%20LOGO.png"];
  const [currentImage, setCurrentImage] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress + 1) % 100);
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [images.length]);
  

  return (
    <section className={homeCss.home}>
      <div className={homeCss.carousel}>
        {special
        .filter((image) => {
          if (image._id === "6695323b4c0d2a717388cfda") {
            return false;
          }

          return true;
        })
        .map((image, index) => (
          <div
            key={index}
            className={`${homeCss.carouselImage} ${index === currentImage ? homeCss.active : ''}`}
            style={{ backgroundImage: `url(${Server}/image/wallpaper/${image.image})` }}
          ></div>
        ))}

        
      </div>
      <div className={homeCss.carouselIndicator}>
        <div className={homeCss.progressBar} style={{ width: `${progress}%` }}></div>
      </div>
      <div className={homeCss.secContainer}>
        <div className={homeCss.homeText}>
          <h1 data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className={homeCss.title}>
            <span className={homeCss.titlespan}>{title}</span> A2K GROUP
          </h1>
          <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className={homeCss.subTitle}>
           {
            text
           }
           </p>
          <button data-aos="zoom-out" className={homeCss.btn}>
            <a href="#">SEE WHAT TO DO</a>
          </button>
          <button data-aos="zoom-in" className={homeCss.btn}>
            <a href="#">LEARN WITH US</a>
          </button>
          <button data-aos="zoom-out" className={homeCss.btn}>
            <a href="#">WORK WITH US</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
