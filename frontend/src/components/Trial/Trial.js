import React from 'react'
import "./Trial.css"

function Trial({trial}) {
    return (
        <div className="trial_container" >
            <div className="trialimg" ><img src="https://dev.rodpub.com/images/157/626_main.jpg" alt="dream"/></div>
            <div className="trail_description">
                <div className="description_id" > trial ID : <span>{trial._id}</span></div>
                <div className="description_header" >{trial.studyBriefTitle}</div>
                <div className="description_detail" >{trial.studyFormalTitle}</div>
                <div className="description_treatment" > City : <span>{trial.city}</span></div>
            </div>
        </div>
    )
}

export default Trial
