import React from 'react';
import footercss from './footer.module.css';
import logoa2k from '../../Assets/A2K-LOGO.png';
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={footercss.footer}>
      <div className={`${footercss.secContainer} ${footercss.container} ${footercss.grid}`}>
        <div className={footercss.logoDiv}>
          <div className={footercss.footerLogo}>
            <a href="#" className={footercss.logo}>
              <img src={logoa2k} alt="A2K Logo" />
              <p className={footercss.angad}>ANGAD • ANGAT • KASAMA</p>
            </a>
            <p className={footercss.slogan}>Transforming Services through Digitalization</p>
          </div>
        </div>

        <div className={footercss.footerLinks}>
          <span className={footercss.linkTitle}>Quick links</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div>

        <div className={footercss.footerSocial}>
          <span className={footercss.linkTitle}>Social Media</span>
          <div className={`${footercss.socials} ${footercss.flex}`}>
            <FaFacebook className={footercss.icon} />
            <AiFillInstagram className={footercss.icon} />
            <BsLinkedin className={footercss.icon} />
          </div>
        </div>

        <div className={footercss.footerSubscription}>
          <span className={footercss.linkTitle}>E-mail Subscription</span>
          <p>Get the latest updates on tech products, courses, </p>
          <p className={footercss.bot}>workshops, internship opportunities and services.</p>
          <button className={footercss.subscribeButton}>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
