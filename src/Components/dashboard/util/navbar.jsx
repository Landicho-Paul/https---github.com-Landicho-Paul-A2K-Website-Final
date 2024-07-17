import React from 'react'
import './navbar.css'
import A2klogo from '../../Assets/image/A2k_logo.png'
import { NavLink } from 'react-router-dom';
const navbar = () => {
  return (
    <div className='navbar1'>
      <div className='navbarlogo'><img src={A2klogo} alt="" /></div>
      <div className='title'><p>A2K Content Management System</p></div>
      <NavLink to="/index/profilesetting" className="profilesetting">
      <div className='profilenav'><p>Profile</p></div>
      </NavLink>
    </div>
  )
}

export default navbar
