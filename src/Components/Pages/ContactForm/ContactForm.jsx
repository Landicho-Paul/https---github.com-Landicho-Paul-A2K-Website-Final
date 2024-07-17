import React, { useEffect,useState } from "react";
import { MdCall, MdOutlineMail } from "react-icons/md";
import { FaViber, FaWhatsapp, FaRegClock } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import contactForm from './contactform.module.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import axios from "axios";

const ContactForm = () => {
    const [hotline, setHotline] = useState(null);
    const [viber, setViber] = useState(null);
    const [whatsapp, setWatsApp] = useState(null);
    const [email, setEmail] = useState(null);
    const [location, setLocation] = useState(null);
    const [bussinesshour, setBussinessHour] = useState(null);

    useEffect(() => {
        Aos.init({ duration: 2000 });
        fetchDatas();
    }, []);


    
      const fetchDatas = async () => {
        const result = await axios({
          method: "GET",
          url: "http://localhost:3001/admin_accounts/dashboard/fetch",
        });
        // console.log(result.data);
        setEmail(result.data[0].email);
        setHotline(result.data[0].hotline);
        setViber(result.data[0].viber);
        setLocation(result.data[0].location);
        setWatsApp(result.data[0].whatsapp);
        setBussinessHour(result.data[0].bussinesshour);
      };
    
    return (
        <div className={contactForm['contact-form-container']}>

            <div className={contactForm['contact-form-bg']}>
              
                <div className={contactForm.header} data-aos="fade-down">
                    <h2>GET IN TOUCH</h2>
                </div> 
                <div className={contactForm['main-content']}>
                    <div className={contactForm['contact-form-section']} data-aos="fade-up-right">
                        <h2>Contact Us</h2>
                        <form>
                            <label>
                                Full Name
                                <input type="text" name="name" placeholder="Name" />
                            </label>
                            <label>
                                Email Address
                                <input type="email" name="email" placeholder="Email" />
                            </label>
                            <label>
                                Message
                                <textarea name="message" placeholder="Message"></textarea>
                            </label>
                            <button type="submit">Send Message</button>
                            <p></p>
                        </form>
                    </div>
                    <div className={contactForm['map-section']} data-aos="fade-down-left">
                        <iframe
                            className={contactForm.map}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3853.648864469113!2d120.65401127495751!3d15.01218478552445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f72ecc202bdd%3A0x9f2f2aa3f732ced0!2sA2K%20Group!5e0!3m2!1sen!2sph!4v1720974927709!5m2!1sen!2sph"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            title="Location"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div className={contactForm['info-section']}>
                <div className={contactForm.info} data-aos="zoom-in-right">
                    <i className={contactForm.icon}>
                        <MdCall className={contactForm.icon} />
                    </i>
                    <p className={contactForm.title}>HOTLINE</p>
                    <p>{hotline}</p>
                </div>
                <div className={contactForm.info} data-aos="zoom-in">
                    <i className={contactForm.icon}>
                        <FaViber className={contactForm.icon} />
                    </i>
                    <p className={contactForm.title}>VIBER</p>
                    <p>{viber}</p>
                </div>
                <div className={contactForm.info} data-aos="zoom-in-left">
                    <i className={contactForm.icon}>
                        <FaWhatsapp className={contactForm.icon} />
                    </i>
                    <p className={contactForm.title}>WHATSAPP</p>
                    <p>{whatsapp}</p>
                </div>
                <div className={contactForm.info} data-aos="zoom-in-up">
                    <i className={contactForm.icon}>
                        <MdOutlineMail className={contactForm.icon} />
                    </i>
                    <p className={contactForm.title}>EMAIL US</p>
                    <p>{email}</p>
                </div>
                <div className={contactForm.info} data-aos="zoom-in-down">
                    <i className={contactForm.icon}>
                        <FaRegClock className={contactForm.icon} />
                    </i>
                    <p className={contactForm.title}>BUSINESS HOURS</p>
                    <p>{bussinesshour}</p>
                </div>
                <div className={contactForm.info} data-aos="zoom-in-up">
                    <i className={contactForm.icon}>
                        <SlLocationPin className={contactForm.icon} />
                    </i>
                    <p className={contactForm.title}>LOCATION</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
