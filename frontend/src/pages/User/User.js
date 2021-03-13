import React from 'react'
import { Avatar } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Trial from '../../components/Trial/Trial';
import Navbar from '../../components/Navbar/Navbar';
import './User.css'

function User() {
    return (
        <div>
            <Navbar/>
                <div className="org_header">
                    <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                    <h1>User</h1>
                    <span>Clinical trials</span>
                </div>
                <div className="track" >
                    User <ArrowForwardIosIcon/> <span>Your trials</span>
                </div>
                <div className="lower_home">
               <div> <Trial/></div>
               <div> <Trial/></div>
               <div> <Trial/></div>
               <div> <Trial/></div>
            </div>
        </div>
    )
}

export default User
