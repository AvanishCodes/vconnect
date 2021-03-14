import React from 'react'
import PolymerIcon from '@material-ui/icons/Polymer';
import { Button } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Navbar.css';
import { isOrg, isUser } from "../../util/auth";
import { useHistory } from "react-router-dom";

function Navbar() {
  const history = useHistory();
  return (
    <div>
      <nav className="navbar">
        <div><PolymerIcon /></div>
        {/* <div>Home</div> */}
        <Button className="homebtn" variant="contained" onClick={(e) => {
          if (isOrg()) {
            history.push("/")
          } else if (isUser()) {
            history.push("/")
          }
        }}><PersonOutlineIcon /><span>Home</span></Button>
        <div>
          <Button className="accbtn" variant="contained" onClick={(e) => {
            if (isOrg()) {
              history.push("/orgacc")
            } else if (isUser()) {
              history.push("/useracc")
            }
          }}><PersonOutlineIcon /><span>Account</span></Button>
          <Button className="logoutbtn" variant="contained"
            onClick={(e) => {
              if (isOrg()) {
                localStorage.removeItem("org");
                history.push("/login")
              } else if (isUser()) {
                localStorage.removeItem("user");
                history.push("/login")
              }
            }}><ExitToAppIcon /><span>Logout</span></Button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
