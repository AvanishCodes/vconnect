import React from 'react'
import "./Trial.css"

function Trial() {
    return (
        <div className="trial_container" >
            <div className="trialimg" ><img src="https://dev.rodpub.com/images/157/626_main.jpg" alt="dream"/></div>
            <div className="trail_description">
                <div className="description_id" > trial ID : <span>1e344vd</span></div>
                <div className="description_header" >Brief title </div>
                <div className="description_detail" >Format </div>
                <div className="description_treatment" > treatment : <span>xyz, ysdfk, xyz, ysdfk, xyz, ysdfk, xyz, ysdfk</span></div>
            </div>
        </div>
    )
}

export default Trial
