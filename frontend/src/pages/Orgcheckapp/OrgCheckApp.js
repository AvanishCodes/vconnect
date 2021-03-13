import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './OrgcheckApp.css'
function OrgCheckApp() {
    return (
        <div>
             <Navbar/>
            <div className="org_header">
                    <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                    <h1>ABC Organization</h1>
                    <span>Clinical trials</span>
                </div>
                <div className="track" >
                    User <ArrowForwardIosIcon /> <span>Your Trials</span> <ArrowForwardIosIcon /> <span>Check Application</span> 
                </div>
                <div className="lower_home">
                </div>
                
        </div>
    )
}

export default OrgCheckApp
