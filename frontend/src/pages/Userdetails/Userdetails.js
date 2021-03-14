import Footer from '../../components/Footer/Footer';
import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Userdetails() {
    return (
        <div>
            <Navbar />
            <div className="org_header">
                <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                <h1>User Name</h1>
                <span>Clinical trials</span>
            </div>
            <div className="track" >
                User <ArrowForwardIosIcon /> <span>Account</span>
            </div>
            <div className="field">
                <table className="checktable">
                    <tr className="rowt" >
                        <td>Name of user :</td>
                        <td className="field" >Name</td>
                    </tr>
                    <tr className="rowt" >
                        <td>Address Line 1:</td>
                        <td className="field" >Address Line </td>
                    </tr>
                    <tr className="rowt" >
                        <td>City:</td>
                        <td className="field" >City </td>
                    </tr>
                    <tr className="rowt" >
                        <td>State:</td>
                        <td className="field" >State</td>
                    </tr>
                    <tr className="rowt" >
                        <td>Country:</td>
                        <td className="field" >Country</td>
                    </tr>
                    <tr className="rowt" >
                        <td>Pin Code:</td>
                        <td className="field" >Pin Code</td>
                    </tr>
                    <tr className="rowt" >
                        <td>Website:</td>
                        <td className="field" >Website </td>
                    </tr>
                    <tr className="rowt" >
                        <td>Help-line Number: </td>
                        <td className="field" >phone num</td>
                    </tr>
                    <tr className="rowt" >
                        <td>Gender: </td>
                        <td className="field" > Gender  </td>
                    </tr>
                    <tr className="rowt" >
                        <td>Age: </td>
                        <td className="field" >Age</td>
                    </tr>
                    <tr className="rowt" >
                        <td>Keyword: </td>
                        <td className="field" >Keyword</td>
                    </tr>
                </table>
            </div>
            <Footer />
        </div>
    )
}

export default Userdetails
