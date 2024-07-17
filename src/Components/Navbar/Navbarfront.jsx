import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import navBarcss from './navbarfront.module.css';
import { TbGrain } from 'react-icons/tb';
import a2klogo from '../../Assets/A2K-LOGO.png';
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsUiRadiosGrid } from "react-icons/bs";
import { RiArrowDownSFill } from "react-icons/ri";
import "../../Components/Navbar/navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 980);

  const toggleNav = () => {
    setActive(!active);
  };

  const toggleDropdown = (index) => {
    if (isMobileView) {
      if (openDropdown === index) {
        setOpenDropdown(null);
      } else {
        setOpenDropdown(index);
      }
    }
  };

  const [transparent, setTransparent] = useState(navBarcss.header);
  const addBg = () => {
    if (window.scrollY >= 10) {
      setTransparent(`${navBarcss.header} ${navBarcss.activeHeader}`);
    } else {
      setTransparent(navBarcss.header);
    }
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 980);
  };

  useEffect(() => {
    window.addEventListener('scroll', addBg);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', addBg);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={navBarcss.navBarSection}>
      <div className={transparent}>
        <div className={navBarcss.logoDiv}>
          <NavLink to="/" className={navBarcss.logo}>
            <img className={navBarcss.logo} src={a2klogo} alt="Image Logo" />
            <p className={navBarcss.angad}>ANGAD • ANGAT • KASAMA</p>
          </NavLink>
        </div>

        <div className={`${navBarcss.navBar} ${active ? navBarcss.activeNavbar : ''}`}>
          <ul className={`${navBarcss.navLists} ${navBarcss.flex}`}>
            <li
              className={`${navBarcss.navItem} ${openDropdown === 0 ? navBarcss.show : ''}`}
              onClick={() => toggleDropdown(0)}
            >
              <NavLink to="/OurStory" className={navBarcss.navLink} activeClassName={navBarcss.activeLink}>About Us <RiArrowDownSFill /></NavLink>
              <ul className={navBarcss.dropdownMenu}>
                <li><NavLink to="/OurStory" activeClassName={navBarcss.activeLink}>Our Story</NavLink></li>
                <li><NavLink to="/boardPage" activeClassName={navBarcss.activeLink}>Management Board</NavLink></li>
              </ul>
            </li>
            <li
              className={`${navBarcss.navItem} ${openDropdown === 1 ? navBarcss.show : ''}`}
              onClick={() => toggleDropdown(1)}
            >
              <NavLink to="/LearnWithUs" className={navBarcss.navLink} activeClassName={navBarcss.activeLink}>Services <RiArrowDownSFill /></NavLink>
              <ul className={navBarcss.dropdownMenu}>
                <li><NavLink to="/LearnWithUs" activeClassName={navBarcss.activeLink}>Learn With Us</NavLink></li>
                <li><NavLink to="/keyservices" activeClassName={navBarcss.activeLink}>Key Services</NavLink></li>
              </ul>
            </li>
            <li className={navBarcss.navItem}>
              <a href="https://a2kacademy.com/" target='_blank' className={navBarcss.navLink}> Academy</a>
            </li>
            <li className={navBarcss.navItem}>
              <NavLink to="/newsPage" className={navBarcss.navLink} activeClassName={navBarcss.activeLink}>News</NavLink>
            </li>
            <li
              className={`${navBarcss.navItem} ${openDropdown === 2 ? navBarcss.show : ''}`}
              onClick={() => toggleDropdown(2)}
            >
              <NavLink to="/contact" className={navBarcss.navLink} activeClassName={navBarcss.activeLink}>Contact <RiArrowDownSFill /></NavLink>
              <ul className={navBarcss.dropdownMenu}>
                <li><NavLink to="/Directory" activeClassName={navBarcss.activeLink}>Group's Directory</NavLink></li>
              </ul>
            </li>
            <div className={`${navBarcss.headerBtns} ${navBarcss.flex}`}>
              <FaFacebook className={navBarcss.iconsoc} />
              <AiFillInstagram className={navBarcss.iconsoc} />
              <BsLinkedin className={navBarcss.iconsoc} />
            </div>
          </ul>
        </div>

        <div onClick={toggleNav} className={navBarcss.toggleNavbar}>
          <BsUiRadiosGrid className={navBarcss.icon} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
