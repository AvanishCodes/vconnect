import Footer from '../../components/Footer/Footer';
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar, Button } from '@material-ui/core';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './Orgacc.css'

function OrgAcc(org) {
    const [keyword, setKeyword] = useState("")
    return (
        <div>
            <Navbar />
            <div className="org_header">
                <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                <h1>ABC Organization</h1>
                <span>Clinical trials</span>
            </div>
            <div >
                <span>Name of Organization: </span>
            </div>
            <div className="field">
                <table>
                    <tr>
                        <td>Address Line 1:</td>
                        <td><input placeholder="Address Line 1" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>City:</td>
                        <td><input placeholder="City" type="text" onChange={(e) => setKeyword(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td>State:</td>
                        <td><input placeholder="State" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Country:</td>
                        <td><input placeholder="Country" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Pin Code:</td>
                        <td><input placeholder="Pin Code" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Website:</td>
                        <td><input placeholder="website URL" type="text" onChange={(e) => setKeyword(e.target.value)} />  </td>
                    </tr>
                    <tr>
                        <td>Help-line Number: </td>
                        <td><input placeholder="help line number" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                </table>
            </div>
            <Button className="savebutton" variant="contained" >save changes</Button>
            {/* <div className="footer"><Footer /></div> */}
        </div>
    )
}

export default OrgAcc
