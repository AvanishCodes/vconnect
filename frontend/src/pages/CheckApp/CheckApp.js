import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Footer from '../../components/Footer/Footer';

function CheckApp() {
    return (
        <div>
            <Navbar />
            <div className="org_header">
                <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                <h1>User Name</h1>
                <span>Clinical trials</span>
            </div>
            <div className="track" >
                User <ArrowForwardIosIcon /> <span>Your Trials</span> <ArrowForwardIosIcon /> <span>check status</span>
            </div>
            <div className="lower_home">
            </div>
            {/* <div className="footer"><Footer /></div> */}
        </div>
    )
}

export default CheckApp
