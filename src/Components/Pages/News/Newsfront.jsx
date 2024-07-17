import React from 'react';
import newsFront from './newsfront.module.css';
import { VscArrowSmallRight } from "react-icons/vsc";

// Images
import imgNews1 from '../../Assets/news1.jpg';
import imgNews2 from '../../Assets/news2.jpg';
import imgNews3 from '../../Assets/news3.jpg';
import imgNews4 from '../../Assets/news4.jpg';

const News = [
  {
    id: 1,
    newsImage: imgNews1,
    title: 'Summer Internship Successful',
    desc: 'Back by popular demand! Are you a past or current University student?* Are you interested'
  },
  {
    id: 2,
    newsImage: imgNews2,
    title: 'Join Our International ...',
    desc: 'Back by popular demand! Are you a past or current University student?* Are you interested '
  },
  {
    id: 3,
    newsImage: imgNews3,
    title: 'Busy Week for Our OJTs:...',
    desc: 'Back by popular demand! Are you a past or current University student?* Are you interested '
  },
  {
    id: 4,
    newsImage: imgNews4,
    title: 'We Celebrated the Compl...',
    desc: 'Back by popular demand! Are you a past or current University student?* Are you interested '
  },
];

const NewsA2K = () => {

  
  return (
    <section className={newsFront.blog + " container section"}>
      <div className={newsFront.secContainer}>
        <div className={newsFront.secIntro}>
          <h2 className={newsFront.secTitle}>
            OUR LATEST NEWS
          </h2>
          <p >
            Get in touch with the Latest News of A2K GROUP
          </p>
        </div>

        <div className={newsFront.mainContainer + " grid"}>
          {News.map((item) => (
            <div className={newsFront.singleNews} key={item.id}>
              <div className={newsFront.imgDiv}>
                <img src={item.newsImage} alt={`News ${item.id}`} />
              </div>

              <div className={newsFront.postDetails}>
                <h3 data-aos="fade-up">
                  {item.title}
                </h3>
                <p>
                  {item.desc}
                </p>
              </div>
              <a href="#" className={newsFront.flex}>
                Read More ➜
              </a>
            </div>
          ))}
        </div>

        <div className={newsFront.btnContainer}>
          <button className={newsFront.btnnews}>
            <a href="#">SEE MORE NEWS</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsA2K;
