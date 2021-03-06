// import CheckApp from "./pages/CheckApp/CheckApp";
import React from 'react'
import "./Trial.css"
import { Button } from '@material-ui/core';
import { isOrg, isUser } from "../../util/auth";
import { postApplication } from "../../util/application";
import { useHistory } from "react-router-dom";

function Trial({ trial }) {
    const history = useHistory();
    const trialId = trial._id;
    const userToken = isUser() && isUser().token;
    const userId = isUser() && isUser().user._id;
    return (
        <>
            <div className="trial_container" >
                {/* <div className="trialimg" ><img src="https://dev.rodpub.com/images/157/626_main.jpg" alt="dream" /></div> */}
                <div className="trail_description">
                    <div className="description_id" > trial ID : <span>{trial._id}</span></div>
                    <div className="description_header" >{trial.studyBriefTitle}</div>
                    <div className="description_detail" >{trial.studyFormalTitle}</div>
                    <div className="description_treatment" > Place : <span>{trial.city}, {trial.State}, {trial.country}</span></div>
                </div>

                {isUser() && (
                    <div className="trial_btns">
                        <Button className="tbtn1" variant="contained">Check Status</Button>
                        <Button className="tbtn2" variant="contained" onClick={(e) => {
                            postApplication(userToken, trialId, userId)
                                .then((data, err) => {
                                    if (err)
                                        console.log(err)
                                    else {
                                        alert('Applied successfully! Thank you.');
                                    }
                                })
                        }

                        }>Apply for Volunteer</Button>
                    </div>
                )}
                {isOrg() && (
                    <div className="trial_btns">
                        <Button className="tbtn3" variant="contained" onClick={(e) => {
                            history.push(`/org/trialedit/${trial._id}`)
                        }}>Edit trial </Button>
                        <Button className="tbtn4" variant="contained" onClick={(e) => {
                            history.push(`/org/checkapp/${trial._id}`)
                        }}>Check application
                        </Button>
                    </div>

                )}


            </div>
        </>
    )
}

export default Trial
