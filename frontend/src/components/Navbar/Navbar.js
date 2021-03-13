import React from 'react'
import PolymerIcon from '@material-ui/icons/Polymer';
import { Button } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div><PolymerIcon/></div>
                <div>
                    <Button className="accbtn" variant="contained"><PersonOutlineIcon/><span>Account</span></Button>
                    <Button className="logoutbtn" variant="contained"><ExitToAppIcon/><span>Logout</span></Button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
