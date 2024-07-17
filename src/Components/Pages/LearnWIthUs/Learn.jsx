import React, { useEffect } from "react";
import learn from './learn.module.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

import learnImg2 from '../../../Assets/10.jpg';

import softImg1 from '../../../Assets/python.png';
import softImg2 from '../../../Assets/pygame.png';
import softImg3 from '../../../Assets/tkinter.png';
import softImg4 from '../../../Assets/visual-studio-code.png';
import softImg5 from '../../../Assets/raspberry-pi.png';

import hardImg1 from '../../../Assets/free-cad.png';
import hardImg2 from '../../../Assets/tinker-cad.png';
import hardImg3 from '../../../Assets/k13d.png';
import hardImg4 from '../../../Assets/ender-2-pro.png';

import certImg1 from '../../../Assets/coder.png';
import certImg2 from '../../../Assets/game-creator.png';
import certImg3 from '../../../Assets/app-creator.png';
import certImg4 from '../../../Assets/web-creator.png';
import certImg5 from '../../../Assets/robotics-coder.png';
import certImg6 from '../../../Assets/designer.png';

const Software = [
  { idsoft: 1, SoftImg: softImg1, title: 'Python' },
  { idsoft: 2, SoftImg: softImg2, title: 'PyGame' },
  { idsoft: 3, SoftImg: softImg3, title: 'Tkinter' },
  { idsoft: 4, SoftImg: softImg4, title: 'Visual Studio Code' },
  { idsoft: 5, SoftImg: softImg5, title: 'Raspberry Pi' },
];

const Hardware = [
  { idhard: 1, HardImg: hardImg1, title: 'FreeCAD' },
  { idhard: 2, HardImg: hardImg2, title: 'TinkerCAD' },
  { idhard: 3, HardImg: hardImg3, title: 'K1 3D Printer' },
  { idhard: 4, HardImg: hardImg4, title: 'Ender 2 Pro 3D Printer' },
];

const Certificate = [
  { idcert: 1, CertImg: certImg1, title: 'PyCharm with Python' },
  { idcert: 2, CertImg: certImg2, title: 'PyGame with Python' },
  { idcert: 3, CertImg: certImg3, title: 'Tkinter with Python' },
  { idcert: 4, CertImg: certImg4, title: 'Web Developer with Python' },
  { idcert: 5, CertImg: certImg5, title: 'Raspberry Pi with Python' },
  { idcert: 6, CertImg: certImg6, title: 'FreeCAD' },
];

const Learn = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className={learn.learn}>
      <div className={learn.secContainer}>
        <div className={learn.learnMainContent}>
          <h1 className={learn.title} data-aos="fade-up" data-aos-offset="300">
            LEARN WITH US AT <span className={learn.subtitle}>A2K GROUP</span>
          </h1>

          <div className={learn.learnContent} data-aos="fade-right">
            <div className={learn.singleItem} data-aos="fade-right" data-aos-offset="300">
              <h1>CODING FOR KIDS</h1>
              <p>
                At A2K Group, we champion the cause of digitalization in the Philippines and around the world
                to usher in a new era of technological advancement. We specialize in developing digital services
                and processes, providing comprehensive training to both students and leaders with complementary
                skillsets, and investing in promising individuals and innovative ideas to reshape the digital
                landscape. Our services are guided by a company culture rooted in the recognition that we are
                part of both a local and global community, working towards a brighter tomorrow for society as a
                whole. Aligned with this mission, we strive to empower individuals and organizations, enabling
                them to leverage digital tools for operational optimization and the creation of more efficient
                systems that benefit their communities. Together, across all three divisions of A2K Group, we
                collaboratively craft transformative services with holistic solutions to propel the digital
                evolution forward.
              </p>
            </div>
            <div className={learn.singleItem} data-aos="fade-right" data-aos-offset="200">
              <img src={learnImg2} alt="Learn With Us" />
            </div>
          </div>

          <div className={learn.softwareContent} data-aos="fade-right">
            {Software.map((item) => (
              <div className={learn.singleItem} key={item.idsoft}>
                <img src={item.SoftImg} alt={`Software ${item.idsoft}`} />
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>

          <div className={learn.learnContent} data-aos="fade-right">
            <div className={learn.singleItem} data-aos="fade-right" data-aos-offset="200">
              <img src={learnImg2} alt="Learn With Us" />
            </div>
            <div className={learn.singleItem} data-aos="fade-right" data-aos-offset="300">
              <h1>3D DESIGNING & PRINTING FOR KIDS</h1>
              <p>
                At A2K Group, we champion the cause of digitalization in the Philippines and around the world
                to usher in a new era of technological advancement. We specialize in developing digital services
                and processes, providing comprehensive training to both students and leaders with complementary
                skillsets, and investing in promising individuals and innovative ideas to reshape the digital
                landscape. Our services are guided by a company culture rooted in the recognition that we are
                part of both a local and global community, working towards a brighter tomorrow for society as a
                whole. Aligned with this mission, we strive to empower individuals and organizations, enabling
                them to leverage digital tools for operational optimization and the creation of more efficient
                systems that benefit their communities. Together, across all three divisions of A2K Group, we
                collaboratively craft transformative services with holistic solutions to propel the digital
                evolution forward.
              </p>
            </div>
          </div>

          <div className={learn.hardwareContent} data-aos="fade-right">
            {Hardware.map((item) => (
              <div className={learn.singleItem} key={item.idhard}>
                <img src={item.HardImg} alt={`Hardware ${item.idhard}`} />
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>

          <div className={learn.certMainContent}>
            <h1 className={learn.certh1} data-aos="zoom-in">TRANSFORMING SERVICES THROUGH DIGITALIZATION</h1>
            <h3 className={learn.certh3} data-aos="zoom-in">Join our Future-Ready Skills Classes!</h3>
            <p className={learn.certp} data-aos="zoom-in">
              Find out more at <span className={learn.link}>courses@a2kgroup.org</span>
            </p>

            <div className={learn.certContent} data-aos="fade-right">
              {Certificate.map((item) => (
                <div className={learn.singleItem} key={item.idcert}>
                  <img src={item.CertImg} alt={`Certificate ${item.idcert}`} />
                  <h1>{item.title}</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learn;
