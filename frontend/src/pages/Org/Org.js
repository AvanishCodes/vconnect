import Footer from '../../components/Footer/Footer';
// <div className="footer"><Footer /></div>
import React, { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Trial from '../../components/Trial/Trial';
import Navbar from '../../components/Navbar/Navbar';
import './Org.css';
import { isOrg } from "../../util/auth";
import { getOrgTrials } from "../../util/trial";

function Org() {
  const [trials, setTrials] = useState([]);
  const token = isOrg() && isOrg().token;
  const orgId = isOrg() && isOrg().org._id;
  useEffect(() => {
    getOrgTrials(token, orgId)
      .then((data, err) => {
        if (err)
          console.log(err)
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
        <h1>{isOrg() && isOrg().org.name}</h1>
        <span>Clinical trials</span>
      </div>
      <div className="track" >
        {isOrg() && isOrg().org.name} <ArrowForwardIosIcon /> <span>Your trials</span>
      </div>
      <div className="lower_home">
        {trials.map((trial, i) => (
          <div key={i}>
            <Trial trial={trial} />
          </div>
        ))}
      </div>
      {/* <div className="footer"><Footer /></div> */}
      <Footer />
    </div>
  )
}

export default Org
