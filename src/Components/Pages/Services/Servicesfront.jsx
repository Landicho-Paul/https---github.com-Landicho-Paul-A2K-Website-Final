import React, { useState, useEffect, useRef } from 'react';
import servicesfront from './servicesfront.module.css';
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleSlides = 4;
  const carouselRef = useRef(null);
  const Server = "http://localhost:3001";
  const [trans, setTrans] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    try {
      const result = await axios.get(`${Server}/admin_accounts/trans/gettrans`);
      setTrans(result.data);
      console.log(result.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + trans.length) % trans.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % trans.length);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      const itemWidth = carousel.offsetWidth / numVisibleSlides;
      const scrollAmount = currentIndex * itemWidth;
      carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < numVisibleSlides; i++) {
      slides.push(trans[(currentIndex + i) % trans.length]);
    }
    return slides;
  };

  return (
    <section className={`${servicesfront.popular} ${servicesfront.section} ${servicesfront.container}`}>
      <div className={servicesfront.secContainer}>
        <div className={`${servicesfront.secHeader} ${servicesfront.flex}`}>
          <div className={servicesfront.textDiv}>
            <h2 data-aos="fade-right" className={servicesfront.secTitle}>
              <span className={servicesfront.a2k}>A2K GROUP </span>TRANSFORMATIVE SERVICES
            </h2>
            <p data-aos="fade-right">
              Transforming Services through Digitalization
            </p>
          </div>
        </div>

        <div className={servicesfront.mainContent} data-aos="zoom-out-down" data-aos-duration="3000">
          <RiArrowLeftWideFill className={`${servicesfront.icon} ${servicesfront.leftIcon}`} onClick={handlePrevClick} />
          <div className={servicesfront.carousel} ref={carouselRef}>
            {trans.length > 0 ? (
              getVisibleSlides().map((item) => (
                <div key={item._id} className={servicesfront.transfServices}>
                  <a href="#">
                    <div className={servicesfront.servicesImage}>
                      <img src={`${Server}/image/trasformative/${item.image}`} alt={item.title || 'Service'} />
                    </div>
                  </a>
                  <div className={servicesfront.servicesFooter}>
                    <div className={`${servicesfront.servicesText} ${servicesfront.flex}`}>
                      <h6>{item.title}</h6>
                      <span className={servicesfront.flex}>
                        <BsDot className={`${servicesfront.icon} ${servicesfront.dot}`} />
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No services available</p>
            )}
          </div>
          <RiArrowRightWideFill className={servicesfront.icon} onClick={handleNextClick} />
        </div>
      </div>
    </section>
  );
};

export default Services;
