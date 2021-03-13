// import CheckApp from "./pages/CheckApp/CheckApp";
import React from 'react'
import "./Trial.css"
import { Button } from '@material-ui/core';
import { isOrg, isUser } from "../../util/auth";
import CheckApp from "../../pages/CheckApp/CheckApp";

function Trial({ trial }) {
    return (
        <>
            <div className="trial_container" >
                <div className="trialimg" ><img src="https://dev.rodpub.com/images/157/626_main.jpg" alt="dream" /></div>
                <div className="trail_description">
                    <div className="description_id" > trial ID : <span>{trial._id}</span></div>
                    <div className="description_header" >{trial.studyBriefTitle}</div>
                    <div className="description_detail" >{trial.studyFormalTitle}</div>
                    <div className="description_treatment" > Place : <span>{trial.city}, {trial.State}, {trial.country}</span></div>
                </div>

                {isUser() && (
                    <div className="trial_btns">
                        <Button variant="contained">Check Status</Button>
                        <Button variant="contained">Apply for Volunteer</Button>
                    </div>
                )}
                {isOrg() && (
                    <div className="trial_btns">
                        <Button variant="contained">Edit trial</Button>
                        {/* <Button variant="contained" absolute path="/org/checkapp" component = {CheckApp}>Check applications</Button> */}
                        <Button variant="contained">Check Applications</Button>
                    </div>

                )}


            </div>
        </>
    )
}

export default Trial
