import React from 'react'
import "./Trial.css"
import { Button } from '@material-ui/core';
import { isOrg, isUser } from "../../util/auth";

function Trial({trial}) {
    return (
        <>
            <div className="trial_container" >
                <div className="trialimg" ><img src="https://dev.rodpub.com/images/157/626_main.jpg" alt="dream" /></div>
                <div className="trail_description">
                    <div className="description_id" > trial ID : <span>{trial._id}</span></div>
                    <div className="description_header" >{trial.studyBriefTitle}</div>
                    <div className="description_detail" >{trial.studyFormalTitle}</div>
                    <div className="description_treatment" > City : <span>{trial.city}</span></div>
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
                        <Button variant="contained">Check application</Button>
                    </div>

                )}


            </div>
        </>
    )
}

export default Trial
