import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './UserAcc.css'

function UserAcc() {
    return (
        <div>
            <Navbar/>
            <div className="org_header">
                    <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                    <h1>User Name</h1>
                    <span>Clinical trials</span>
                </div>
                <div className="track" >
                    User <ArrowForwardIosIcon /> <span>Account</span>
                </div>
                <div className="lower_home">
                </div>
                <Button className="savebutton" variant="contained" >save changes</Button>
        </div>
    )
}

export default UserAcc
