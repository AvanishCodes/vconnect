import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar, Button } from '@material-ui/core';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Orgacc.css'

function OrgAcc(org) {
    const [keyword,setKeyword] = useState("")
    return (
        <div>
            <Navbar />
            <div className="org_header">
                <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                <h1>ABC Organization</h1>
                <span>Clinical trials</span>
            </div>
            <div className="field" >
                <span>Name of Organization: </span>
                <span>
                    <input placeholder="Name of the Organization" type="text" onChange={(e) => setKeyword(e.target.value)} />
                </span>
            </div>
            <div className="field" >
                <span>Address Line 1: </span>
                <span>
                    <input placeholder="Address Line 1" type="text" onChange={(e) => setKeyword(e.target.value)} />
                </span>
            </div>
            <div className="field" >
                <span>City: </span>
                <span>
                    <input placeholder="City" type="text" onChange={(e) => setKeyword(e.target.value)} />
                </span>
            </div>
            <div className="field" >
                <span>State: </span>
                <span>
                    <input placeholder="State" type="text" onChange={(e) => setKeyword(e.target.value)} />
                </span>
            </div>
            <div className="field" >
                <span>Country: </span>
                <span>
                    <input placeholder="Country" type="text" onChange={(e) => setKeyword(e.target.value)} />
                </span>
            </div>
            <div className="field" >
                <span>Pin Code: </span>
                <span>
                    <input placeholder="Pin Code" type="text" onChange={(e) => setKeyword(e.target.value)} />
                </span>
            </div>
            <div className="field" >
                <span>Website: </span>
                <span>
                    <input placeholder="website URL" type="text" onChange={(e) => setKeyword(e.target.value)} />
                </span>
            </div>
            <div className="field" >
                <span>Help-line Number: </span>
                <span>
                    <input placeholder="help line number" type="text" onChange={(e) => setKeyword(e.target.value)} />
                </span>
            </div>
            <div className="lower_home">
            </div>
            <Button className="savebutton" variant="contained" >save changes</Button>
        </div>
    )
}

export default OrgAcc
