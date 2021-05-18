import React, { useState } from 'react'
import Trial from '../../components/Trial/Trial'
import { Button } from '@material-ui/core';
import PolymerIcon from '@material-ui/icons/Polymer';
import FilterListIcon from '@material-ui/icons/FilterList';
import { useHistory } from "react-router-dom";
import { getFilteredTrials } from "../../util/trial";
import './Home.css'
import Footer from '../../components/Footer/Footer';
import { isOrg, isUser } from "../../util/auth";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Home() {
  const history = useHistory();
  const [keyword, setKeyword] = useState("");
  const [trials, setTrials] = useState([]);
  const token = isUser() && isUser().token;
  const token1 = isOrg() && isOrg().token;

  const getResults = (e) => {
    e.preventDefault();
    getFilteredTrials(keyword)
      .then(data => {
        if (data.error) {
          console.log(data.error)
        } else {
          //console.log(data)
          setTrials(data)
          setKeyword("");
        }
      });
  }

  return (
    <div className="homecontainer" >
      <div className="upper_home">
        <div className="navbar_upper">
          <div><PolymerIcon /></div>
          <div>
            {token? (
               <div>
               <Button className="accbtn" variant="contained" onClick={(e) => {
                 if (isOrg()) {
                   history.push("/org")
                 } else if (isUser()) {
                   history.push("/user")
                 }
               }}><PersonOutlineIcon /><span>Account</span></Button>
               <Button className="logoutbtn" variant="contained"
                 onClick={(e) => {
                   if (isOrg()) {
                     localStorage.removeItem("org");
                     history.push("/")
                   } else if (isUser()) {
                     localStorage.removeItem("user");
                     history.push("/")
                   }
                 }}><ExitToAppIcon /><span>Logout</span></Button>
             </div>
              ):(
                <>
                {token1? (
                  <div>
                  <Button className="accbtn" variant="contained" onClick={(e) => {
                    if (isOrg()) {
                      history.push("/org")
                    } else if (isUser()) {
                      history.push("/user")
                    }
                  }}><PersonOutlineIcon /><span>Account</span></Button>
                  <Button className="logoutbtn" variant="contained"
                    onClick={(e) => {
                      if (isOrg()) {
                        localStorage.removeItem("org");
                        history.push("/")
                      } else if (isUser()) {
                        localStorage.removeItem("user");
                        history.push("/")
                      }
                    }}><ExitToAppIcon /><span>Logout</span></Button>
                </div>
                ):(
                <>
                  <Button onClick={() => (history.push('./login'))} variant="contained" >Login</Button>
                  <span>Need any help ?</span>
                </>
                )}

              </>
            )}
          </div>
        </div>
        <div><span className="ctrials" >Clinical Trials</span></div>
        {/* Have to implement a horizontal divider */}
        <div>
          <form className="filterform" >
            <span>Find Clinical Trials</span>
            <input placeholder="search keyword" type="text" onChange={(e) => setKeyword(e.target.value)} />
            <input placeholder="loacation" type="text" disabled />
            <div>
              <Button className="navbutton1" variant="contained" disabled><FilterListIcon /> Filter</Button>
              <Button className="navbutton2" variant="contained" onClick={getResults}>Search</Button>
            </div>
          </form>
        </div>
        {/* Have to implement a horizontal divider */}
      </div>
      {/* <div className="filer_res" >3 results found : Pune, India</div> */}
      <div className="lower_home">
        {trials.length===0?(<h2 style={{textAlign:"center"}}>No trials found</h2>):trials.map((trial, i) => (
          <div key={i}>
            <Trial trial={trial} />
          </div>
        ))}
      </div>
      <div className="homefoot">
      <Footer />
      </div>
    </div>
  )
}

export default Home
