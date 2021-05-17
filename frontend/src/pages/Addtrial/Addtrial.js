import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar, Button, TextField } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Footer from '../../components/Footer/Footer';
import './Addtrial.css'

function Addtrial() {
    return (
        <div>
            <Navbar />
            <div className="org_header">
                <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                <h1>Org Name dalna hai yaha</h1>
                <span>New Trial</span>
            </div>
            <div className="track" >
                User <ArrowForwardIosIcon /> <span>Your Trials</span> <ArrowForwardIosIcon /> <span>Add trial</span>
            </div>
            <div className="field">
                <table className="checktable">
                    <tr className="rowt" >
                        <td>Name of user :</td>
                        <td className="field" ><TextField className="inputfield"></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Study Title:</td>
                        <td className="field" ><TextField className="inputfield"></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Study Description:</td>
                        <td className="field" ><TextField className="inputfield"></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>City:</td>
                        <td className="field" ><TextField className="inputfield"></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>State:</td>
                        <td className="field" ><TextField className="inputfield"></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Country:</td>
                        <td className="field" ><TextField className="inputfield"></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Pin Code:</td>
                        <td className="field" ><TextField className="inputfield"></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Website:</td>
                        <td className="field" ><TextField className="inputfield"></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Help-line Number: </td>
                        <td className="field" ><TextField className="inputfield"></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Keyword: </td>
                        <td className="field" ><TextField className="inputfield"></TextField></td>
                    </tr>
                </table>
            </div>
            <div className="buttonspace">
                <Button className="savebutton" variant="contained" >Add Trial</Button>
            </div>
            <Footer />
        </div>
    )
}

export default Addtrial
