import React, { useEffect } from 'react';
import aboutCss from './aboutfront.module.css';

//img
import subsidaryImg from '../../Assets/ANGAD-LOGO.png';
import subsidaryImg2 from '../../Assets/ANGAT-LOGO.png';
import subsidaryImg3 from '../../Assets/KASAMA-LOGO.png';

//video
import video from '../../Assets/video.mp4';

import 'aos/dist/aos.css';
import Aos from 'aos';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
                    
  return (
    <section className={aboutCss.aboutCssAbout + " " + aboutCss.aboutCssSection}>
      <div className={aboutCss.aboutCssSecContainer}>
        <h2 className={aboutCss.aboutCssTitle} data-aos="fade-up">
          OUR SPECIALIZED DIVISIONS / SUBSIDIARIES
        </h2>

        <div className={aboutCss.aboutCssMainContent + " " + aboutCss.aboutCssContainer + " " + aboutCss.aboutCssGrid} data-aos="fade-up" data-aos-duration="3000">
          <div className={aboutCss.aboutCssSingleItem}>
            <img src={subsidaryImg} alt="Image Name" />
            <p>
              Developing app and hardware solutions for organizations for unmet digitization needs.
            </p>
          </div>

          <div className={aboutCss.aboutCssSingleItem}>
            <img src={subsidaryImg2} alt="Image Name" />
            <p>
              Training students and employees of organizations to learn skills to expand digitization though their efforts.
            </p>
          </div>

          <div className={aboutCss.aboutCssSingleItem}>
            <img src={subsidaryImg3} alt="Image Name" />
            <p>
              Funding innovation through competitions and collaborations.
            </p>
          </div>
        </div>

        <div className={aboutCss.aboutCssVideoCard + " " + aboutCss.aboutCssContainer} data-aos="zoom-in">
          <div className={aboutCss.aboutCssCardContent + " " + aboutCss.aboutCssGrid}>
            <div className={aboutCss.aboutCssCardText} data-aos="fade-right">
              <h2>
                <span className={aboutCss.aboutCssWelcome}>Welcome to</span> A2K GROUP
              </h2>
              <p>
                Our international team of mentors and experts stands ready to collaborate with you in crafting tailored digital solutions that cater to your unique needs. Together we can unlock the potential of digitalization, extending its benefits to your people, processes, and platforms.
              </p>
            </div>

            <div className={aboutCss.aboutCssCardVideo} data-aos="fade-left">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
