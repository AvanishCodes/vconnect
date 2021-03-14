import Footer from '../../components/Footer/Footer';
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './UserAcc.css'

function UserAcc() {
    const [keyword,setKeyword] = useState("")

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
                <table className="orgtable">
                    <tr className="rowt" >
                        <td>Name of user :</td>
                        <td className="field" ><input placeholder="username" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Address Line 1:</td>
                        <td className="field" ><input placeholder="Address Line 1" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>City:</td>
                        <td className="field" ><input placeholder="City" type="text" onChange={(e) => setKeyword(e.target.value)} /> </td>
                    </tr>
                    <tr className="rowt" >
                        <td>State:</td>
                        <td className="field" ><input placeholder="State" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Country:</td>
                        <td className="field" ><input placeholder="Country" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Pin Code:</td>
                        <td className="field" ><input placeholder="Pin Code" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Website:</td>
                        <td className="field" ><input placeholder="website URL" type="text" onChange={(e) => setKeyword(e.target.value)} />  </td>
                    </tr>
                    <tr className="rowt" >
                        <td>Help-line Number: </td>
                        <td className="field" ><input placeholder="help line number" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Gender: </td>
                        <td className="field field2" >
                        <input type="radio" id="male" name="gender" value="male" />
                    <label className="userlabel" for="male">Male</label>
                    <input type="radio"  id="female" name="gender" value="female" />
                    <label className="userlabel" for="female">Female</label>
                    <input type="radio"  id="others" name="gender" value="others" />
                    <label className="userlabel" for="others">Both</label>
                        </td>
                    </tr>
                    <tr className="rowt" >
                        <td>Age: </td>
                        <td className="field" ><input placeholder="Age" type="number" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Keyword: </td>
                        <td className="field" ><input placeholder="Keyword" type="text" onChange={(e) => setKeyword(e.target.value)} /></td>
                    </tr>
                </table>
            </div>
            <div className="savebuton">
            <Button  variant="contained" >save changes</Button>
            </div>
            <Footer />
                
        </div>
    )
}

export default UserAcc
