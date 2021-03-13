import React from 'react'
import "./Trial.css"
import { Button } from '@material-ui/core';

function Trial() {
    // yaha se user check akr lena 
    const user = null;
    return (
        <>
        <div className="trial_container" >
            <div className="trialimg" ><img src="https://dev.rodpub.com/images/157/626_main.jpg" alt="dream"/></div>
            <div className="trail_description">
                <div className="description_id" > trial ID : <span>1e344vd</span></div>
                <div className="description_header" >Brief title </div>
                <div className="description_detail" >Format </div>
                <div className="description_treatment" > treatment : <span>xyz, ysdfk, xyz, ysdfk, xyz, ysdfk, xyz, ysdfk</span></div>
            </div>
            <div className="trial_btns">
                {user ?  (
                    <>
                     <Button variant="contained">Check Status</Button>
                     <Button variant="contained">Apply for Volunteer</Button>
                    </>
                ) : (
                    <>
                    <Button variant="contained">Edit trial</Button>
                    <Button variant="contained">Check application</Button>
                    </>
                )}
                
            </div>
        </div>
        </>
    )
}

export default Trial
