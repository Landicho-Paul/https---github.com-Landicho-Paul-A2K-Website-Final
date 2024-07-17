import React from 'react'
import'./pageCSS/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar_logo">Logo to</div>
        <div className="navbar_link">
            <Link to="/" className='link'>HomePage</Link>
            <Link to="/logSignup" className='link'>signup</Link>
            <Link to="/logintry" className='link'>try</Link>


        </div>
        
    </div>
  )
}

export default Navbar
