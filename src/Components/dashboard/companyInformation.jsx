import React, { useState, useEffect } from "react";
import Css from "../dashboard/dashboardCSS/companyinformation.module.css";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone, FaViber, FaBuilding, FaClock } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSaveSharp } from "react-icons/io5";
import axios from "axios";

function CompanyInformation() {
  const [companyInfo, setCompanyInfo] = useState({
    _id: "",
    name: "",
    email: "",
    location: "",
    bussinesshour: "",
    whatsapp: "",
    viber: "",
    hotline: "",
  });

  useEffect(() => {
    FetchDatas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/admin_accounts/dashboard/updateinfo", {
        _id: companyInfo._id,
        set: {
          name: companyInfo.name,
          email: companyInfo.email,
          location: companyInfo.location,
          bussinesshour: companyInfo.bussinesshour,
          whatsapp: companyInfo.whatsapp,
          viber: companyInfo.viber,
          hotline: companyInfo.hotline,
        },
      });
      
      if (result.status === 200) {
        alert("Information updated successfully");
        FetchDatas();
      } else {
        alert("Update failed");
      }
    } catch (error) {
      console.error("Error updating information:", error);
      alert("An error occurred while updating the information");
    }
  };

  const FetchDatas = async () => {
    try {
      const result = await axios.get("http://localhost:3001/admin_accounts/dashboard/fetch");
      const data = result.data[0];
      setCompanyInfo({
        _id: data._id,
        name: data.name,
        email: data.email,
        location: data.location,
        bussinesshour: data.bussinesshour,
        whatsapp: data.whatsapp,
        viber: data.viber,
        hotline: data.hotline,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  

  return (
    <>
      <div className={Css.uppercontainer}>
        <h2 className={Css.text}>Company Information</h2>
        
      </div>
      <div className={Css.lowercontainer}><button className={Css.btn} onClick={handleSubmit}>
          <IoSaveSharp />
        </button>
        <div className={Css.leftcolumn}>
          <div className={Css.p}>
            <p className={Css.header}>Category</p>
          </div>
          <div className={Css.p}>
            <FaBuilding />
            <p className={Css.text}>Company Name</p>
          </div>
          <div className={Css.p}>
            <MdEmail />
            <p className={Css.text}>Email</p>
          </div>
          <div className={Css.p}>
            <FaPhone />
            <p className={Css.text}>Hotline</p>
          </div>
          <div className={Css.p}>
            <FaViber />
            <p className={Css.text}>Viber</p>
          </div>
          <div className={Css.p}>
            <IoLogoWhatsapp />
            <p className={Css.text}>Whatsapp</p>
          </div>
          <div className={Css.p}>
            <FaLocationDot />
            <p className={Css.text}>Location</p>
          </div>
          <div className={Css.p}>
            <FaClock />
            <p className={Css.text}>Bussines Hour</p>
          </div>
        </div>
        <div className={Css.rigthcolumn}>
          <div className={Css.p}>
            <p className={Css.header}>Details</p>
          </div>
          
          <div className={Css.pp}>
            <label className={Css.label} >Company Name:</label>
            <div className={Css.inputcontainer}>
              <input type="text" name="name" value={companyInfo.name} onChange={handleChange} />
              <FaBuilding />
            </div>
          </div>
          <div className={Css.pp}>
          <label className={Css.label} >Email:</label>
            <div className={Css.inputcontainer}>
              <input type="text" name="email" value={companyInfo.email} onChange={handleChange} />
              <MdEmail />
            </div>
          </div>
          <div className={Css.pp}>
          <label className={Css.label} >Hotline:</label>
            <div className={Css.inputcontainer}>
              <input type="text" name="hotline" value={companyInfo.hotline} onChange={handleChange} />
              <FaPhone />
            </div>
          </div>
          <div className={Css.pp}>
          <label className={Css.label} >Viber:</label>
            <div className={Css.inputcontainer}>
              <input type="text" name="viber" value={companyInfo.viber} onChange={handleChange} />
              <FaViber />
            </div>
          </div>
          <div className={Css.pp}>
          <label className={Css.label} >WhatsApp:</label>
            <div className={Css.inputcontainer}>
              <input type="text" name="whatsapp" value={companyInfo.whatsapp} onChange={handleChange} />
              <IoLogoWhatsapp />
            </div>
          </div>
          <div className={Css.pp}>
          <label className={Css.label} >Location:</label>
            <div className={Css.inputcontainer}>
              <input type="text" name="location" value={companyInfo.location} onChange={handleChange} />
              <FaLocationDot />
            </div>
          </div>
          <div className={Css.pp}>
          <label className={Css.label} >Bussiness Hour:</label>
            <div className={Css.inputcontainer}>
              <input type="text" name="bussinesshour" value={companyInfo.bussinesshour} onChange={handleChange} />
              <FaClock />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyInformation;
