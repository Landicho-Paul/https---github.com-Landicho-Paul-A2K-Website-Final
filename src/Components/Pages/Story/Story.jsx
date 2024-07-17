import React, { useEffect } from "react";
import storyfront from "./story.module.css";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import a2kfblogo from "../../../Assets/a2k-fb-logo.jpg";
import bulbImg from "../../../Assets/vision-.png";
import dartImg from "../../../Assets/mission-.png";
import balImg from "../../../Assets/values-.png";

//array MAP

import "aos/dist/aos.css";
import Aos from "aos";

const Offers = [
  {
    id: 1,
    imgSrc: a2kfblogo,
    h4title: "OUR STORY",
    dates: "April 21, 2024",
  },
  {
    id: 2,
    imgSrc: bulbImg,
    h4title: "OUR MISSION",
    dates: "April 15, 2024",
  },
  {
    id: 3,
    imgSrc: dartImg,
    h4title: "OUR VISION",
    dates: "March 14, 2024",
  },
  {
    id: 4,
    imgSrc: balImg,
    h4title: "OUR CORE VALUES",
    dates: "March 7, 2024",
  },
];

const Story = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section
      className={
        storyfront.offer + " " + storyfront.container + " " + storyfront.section
      }
    >
      <div
        className={storyfront.secContainer}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className={storyfront.secIntroduce}>
          <h2 className={storyfront.secTitle}>A2K GROUP</h2>
          <p>Know Our Story and Who we Are</p>
        </div>

        <div className={storyfront.mainContent + " " + storyfront.grid}>
          {Offers.map((item) => {
            return (
              <div className={storyfront.singleNews } key={item._id}> 
                <div className={storyfront.newsImage}>
                  <img src={item.imgSrc} alt={`Service ${item.id}`} />
                </div>

                <div className={storyfront.offerBody}>
                  <div className={storyfront.price + " " + storyfront.flex}>
                    <h4>{item.h4title}</h4>
                  </div>

                  {/*<div className="amenities flex">
                <div className="singleAmenity flex">
                  <IoNewspaperOutline className='icon' />
                  <small>{item.dates}</small>
                </div>

              </div>*/}
                  <button
                    className={storyfront.btn + " " + storyfront}
                    data-aos="zoom-in"
                  >
                    Know More{" "}
                    {/*<MdOutlineKeyboardArrowRight className='icon' />*/}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Story;
