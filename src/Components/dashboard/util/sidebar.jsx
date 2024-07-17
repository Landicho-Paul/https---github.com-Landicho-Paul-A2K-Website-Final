import React from 'react'
import './sidebar.css'
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiNewspaper } from "react-icons/hi2";
import { GrServices } from "react-icons/gr";
import { IoIosInformationCircle } from "react-icons/io";
import { IoPeople } from "react-icons/io5";

function Sidebar() {
    const {currentUser} = useSelector (state => state.user)

  return (
    <div className='sidebar'>
        <ul className='menu'>
            <li className='try'>
                
                <NavLink to="/index/dashboard" className='links'>
                    <div>
                        <RiDashboardHorizontalLine />
                    </div>
                    <span>Main Dashboard</span>
                </NavLink>
                
            </li>
            
        
            <li className='try'>
            {
                currentUser.informationadmin === "1" ? 
                <NavLink to="/index/companyinfo" className='links'>
                    <div>
                    <IoIosInformationCircle />
                    </div>
                    <span>Information</span>
                </NavLink>
                : ''
                }
                
                
                
            </li>
       
            <li className='try'>
            {
                currentUser.newsadmin === "1" ? 
                <NavLink to="/index/newsPage" className='links'>
                        <div>
                        <HiNewspaper />
                        </div>
                        
                        <span>News</span>
                </NavLink>
                : ''
                }
                
                
                
            </li>
            
            <li className='try'>
                {
                currentUser.coverphotoadmin === "1" ? 
                <NavLink to="/index/CoverPhoto" className='links'>
                    <div>
                        <MdManageAccounts />
                    </div>
                    
                    <span>Cover photo</span>
                </NavLink> 
                : ''
                }
                
                
                
            </li>
        
            <li className='try'>

                {
                currentUser.specializedadmin === "1" ? 
                <NavLink to="/index/specialize" className='links'>
                    <div>
                    <GrServices />
                    </div>
                    
                    <span>Services</span>
               </NavLink>
                : ''
                }

                
                
                
            </li>

            <li className='try'>
            {
                currentUser.superadmin === "1" ? 
                <NavLink to="/index/adminAccount" className='links'>
                    <div>
                    <IoPeople />
                    </div>
                    
                    <span>Admin Accounts</span>
               </NavLink>
                : ''
                }
                
                
                
            </li>
        
            <li className='log try' >
                
                <NavLink to="/logout" className='links'>
                    <div className='logouticon' >
                        <IoLogOutOutline />
                    </div>
                    
                    <span className='logoutext' >Log out</span>
               </NavLink>
                
            </li>
        </ul>
      
    </div>
  )
}

export default Sidebar
