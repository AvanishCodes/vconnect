import Footer from '../../components/Footer/Footer';
import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Trialedit() {
    return (
        <div>
            <Navbar />
            <div className="org_header">
                <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                <h1>ABC Organization</h1>
                <span>Clinical trials</span>
            </div>
            <div className="track" >
                ABC Organization <ArrowForwardIosIcon /> <span>Your Trial</span> <ArrowForwardIosIcon /> <span>Edit Trial</span>
            </div>
            <Button className="savebutton" variant="contained" >save changes</Button>
            <Footer />
        </div>
    )
}

export default Trialedit
