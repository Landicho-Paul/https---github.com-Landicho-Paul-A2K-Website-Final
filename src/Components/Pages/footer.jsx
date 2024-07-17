import React, { useEffect, useState } from "react";
import Css from "./pageCSS/footer.module.css";
import axios from "axios";
import { FaLocationDot, FaPhone, FaViber, FaClock } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

import { MdEmail } from "react-icons/md";

function Footer() {
  const [hotline, setHotline] = useState(null);
  const [viber, setViber] = useState(null);
  const [whatsapp, setWatsApp] = useState(null);
  const [email, setEmail] = useState(null);
  const [location, setLocation] = useState(null);
  const [bussinesshour, setBussinessHour] = useState(null);

  const iconsize = 24

  useEffect(() => {
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
    <>
      <div className={Css.box}>
        <div className={Css.informationbox}>
          <div className={Css.information}>
            <FaPhone size={iconsize} />
            <p className={Css.title}>HOTLINE</p>
            <p className={Css.value}>{hotline}</p>
          </div>
          <div className={Css.information}>
            <FaViber size={iconsize}/>
            <p className={Css.title}>VIBER</p>
            <p className={Css.value}>{viber}</p>
          </div>
          <div className={Css.information}>
            <IoLogoWhatsapp size={iconsize}/>
            <p className={Css.title}>WHATS APP</p>
            <p className={Css.value}>{whatsapp}</p>
          </div>
          <div className={Css.information}>
            <MdEmail size={iconsize}/>
            <p className={Css.title}>EMAIL US</p>
            <p className={Css.value}>{email}</p>
          </div>
          <div className={Css.information}>
            <FaClock  size={iconsize}/>
            <p className={Css.title}>BUSSINESS HOUR</p>
            <p className={Css.value}>{bussinesshour}</p>
          </div>
          <div className={Css.information}>
            <FaLocationDot size={iconsize}/>
            <p className={Css.title}>LOCATION</p>
            <p className={Css.value}>{location}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
