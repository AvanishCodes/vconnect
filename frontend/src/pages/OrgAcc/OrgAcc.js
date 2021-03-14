import Footer from '../../components/Footer/Footer';
import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar, Button } from '@material-ui/core';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './OrgAcc.css'
import { isOrg } from "../../util/auth";
import { postOrgProfile} from "../../util/orgProfile";
// import { getOrgTrials } from "../../util/trial";


function OrgAcc(org) {
    const token = isOrg() && isOrg().token;
    const orgId = isOrg() && isOrg().org._id;
    const [profile,setProfile]=useState({
      building:"",
      al1:"",
      city:"",
      state:"",
      country:"",
      zipCode:"",
      Website:"",
      HelpLineNumber:""
    });
    const {building,
    al1,
    city,
    state,
    country,
    zipCode,
    Website,
    HelpLineNumber}=profile;

    const handleChange=(name)=>(event)=>{
  setProfile({...profile,[name]:event.target.value});
};
const handleSubmit=(event)=>{
  event.preventDefault()
  postOrgProfile(token,orgId,profile)
  .then(data=>{
    if(data.error){
      console.log(data.error)
    }else{
      setProfile({
        ...profile,
        building:"",
        al1:"",
        city:"",
        state:"",
        country:"",
        zipCode:"",
        Website:"",
        HelpLineNumber:""

      })
      alert("Added successfully!!")
    }

  })
}
    return (
        <div>
            <Navbar />
            <div className="org_header">
                <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                <h1>ABC Organization</h1>
                <span>Clinical trials</span>
            </div>
            <div className="field">
                <table className="orgtable">
                    <tr className="rowt" >
                        <td>Building:</td>
                        <td className="field" ><input placeholder="building" type="text" value={building} name="building"onChange={handleChange("building")} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Address Line 1:</td>
                        <td className="field" ><input placeholder="Address Line 1" type="text" value={al1} name="al1"onChange={handleChange("al1")} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>City:</td>
                        <td className="field" ><input placeholder="City" type="text" value={city} name="city"onChange={handleChange("city")} /> </td>
                    </tr>
                    <tr className="rowt" >
                        <td>State:</td>
                        <td className="field" ><input placeholder="State" type="text"value={state} name="state"onChange={handleChange("state")} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Country:</td>
                        <td className="field" ><input placeholder="Country" type="text" value={country} name="country"onChange={handleChange("country")} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Pin Code:</td>
                        <td className="field" ><input placeholder="Pin Code" type="text" value={zipCode} name="zipCode"onChange={handleChange("zipCode")} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Website:</td>
                        <td className="field" ><input placeholder="website URL" type="text" value={Website} name="Website"onChange={handleChange("Website")} />  </td>
                    </tr>
                    <tr className="rowt" >
                        <td>Help-line Number: </td>
                        <td className="field" ><input placeholder="help line number" type="text" value={HelpLineNumber} name="HelpLineNumber"onChange={handleChange("HelpLineNumber")} /></td>
                    </tr>
                </table>
            </div>
            <div className="savebuton">
                <Button variant="contained" onClick={handleSubmit}>save changes</Button>
            </div>
            {/* <div className="footer"><Footer /></div> */}
            <Footer />
        </div>
    )
}

export default OrgAcc
