import React, { useEffect, useState } from "react";
import axios from "axios";
// import Footer from "./footer";
import Navbar from "../Navbar/Navbarfront.jsx"
import Footer from "../Footer/Footerfront.jsx"
import Css from "./pageCSS/footer.module.css";
import Card from "./tryhome";

import { Outlet } from "react-router-dom";
function Home() {
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin_accounts/getdata")
      .then((res) => {
        console.log(res);
        if (res.data.length > 0) {
          console.log(res.data);
          setImageUrl(res.data); // Adjust to the correct path for the image URL
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const submitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    try {
      const result = await axios.post(
        "http://localhost:3001/admin_accounts/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Image uploaded successfully:", result.data);

      // setImageUrl(result.data[0]);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  const onInputChange = (e) => {
    console.log(e.target.files[0]);
    setImage(e.target.files[0]);
  };
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
