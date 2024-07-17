import React from 'react'
import Sidebar from "./util/sidebar"
import Navbar from "./util/navbar"
import { Outlet} from 'react-router-dom';
import './util/container.css'



function index() {
  return (
    <>
        <Navbar />
        <div className='container2'>
          <Sidebar />
          <div className='rigthsideDashboard'>
            <div className='sideContainerinAdminAccount'>
            
            <Outlet />
            
            </div>


            
          
          </div>
        </div>
    </>
  )
}

export default index
