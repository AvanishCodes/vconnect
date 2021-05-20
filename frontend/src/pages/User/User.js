import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Trial from '../../components/Trial/Trial';
import Navbar from '../../components/Navbar/Navbar';
import './User.css'
import { isUser } from "../../util/auth";
import Footer from '../../components/Footer/Footer';
import { getUserTrials } from "../../util/trial";

function User() {
  const [trials, setTrials] = useState([]);
  const token = isUser() && isUser().token;
  const userId = isUser() && isUser().user._id;
  useEffect(() => {
    getUserTrials(token, userId)
      .then((data, err) => {
        if (data.error)
          console.log(data)
        else {
          setTrials(data)
        }
      })
  }, [])
  return (
    <div>
      <Navbar />
      <div className="org_header">
        <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
        <h1>{isUser() && isUser().user.name}</h1>
        <span>Clinical trials</span>
      </div>
      <div className="track" >
        {isUser() && isUser().user.name} <ArrowForwardIosIcon /> <span>Your trials</span>
      </div>
      <div className="lower_home">
        {trials.length===0?(<h3 style={{textAlign:"center"}}>No trials found</h3>):trials.map((trial, i) => (
          <div key={i}>
            <Trial trial={trial} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default User
