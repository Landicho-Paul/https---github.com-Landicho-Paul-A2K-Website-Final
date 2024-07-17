import React from "react";
import LogSignup from "./Components/loginSignup/logSignup";
import Home from "./Components/Pages/Home";
import NoPages from "./Components/Pages/NoPages";
import TryPage from "./Components/Pages/TryPage";
import PrivateRoutes from "./Components/util/PrivateRoutes";
import MainDashboard from "./Components/dashboard/MainDashboard";
import AdminAccount from "./Components/dashboard/adminAccount";
import CoverPhoto from "./Components/dashboard/CoverPhoto";
import Specialized from "./Components/dashboard/specialized";
import Companyinfo from "./Components/dashboard/companyInformation";
import Logout from "./Components/dashboard/util/Logout";
import DashboardIndex from "./Components/dashboard/index";
import ProfileSettings from "./Components/dashboard/profilesetting";
import NewsValiidation from "./Components/dashboard/newsPage";
import News from "./Components/News/news";
import Board from "./Components/boardmember/boardmember.jsx";
import HomePage from "./Components/HomePage/home.jsx";
import KeyServices from "./Components/KeyServicesPage/keyservices.jsx"
import LearnWithUs from "./Components/Pages/LearnWIthUs/Learn.jsx"
import OurStory from "./Components/Pages/OurStory/OurStory.jsx";
import Directory from "./Components/Pages/DirectoryGroup/GroupDirect.jsx"
import Contact from "./Components/contactPage/contact.jsx"

import { Route, Routes } from "react-router-dom";

const routes = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />}>
          <Route path="/" element={<HomePage />} />
          <Route path="keyservices" element={<KeyServices />} />
          <Route path="/sdfsdf" element={<TryPage />} />
          <Route path="newsPage" element={<News />} />
          <Route path="LearnWithUs" element={<LearnWithUs />} />
          <Route path="boardPage" element={<Board />} />
          <Route path="Directory" element={<Directory />} />
          <Route path="OurStory" element={<OurStory />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPages />} />
          
        </Route>

        <Route path="/logintry" element={<TryPage />} />

        <Route path="logSignup" element={<LogSignup />} />

        <Route element={<PrivateRoutes />}>
          <Route path="index" element={<DashboardIndex />}>
            <Route path="companyinfo" element={<Companyinfo />} />
            <Route path="specialize" element={<Specialized />} />
            <Route path="dashboard" element={<MainDashboard />} />
            <Route path="adminAccount" element={<AdminAccount />} />
            <Route path="adminAccount" element={<AdminAccount />} />
            <Route path="coverphoto" element={<CoverPhoto />} />
            <Route path="profilesetting" element={<ProfileSettings />} />
            <Route path="newsPage" element={<NewsValiidation />} />
          </Route>

          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </div>
  );
};

export default routes;
