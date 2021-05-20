import Footer from '../../components/Footer/Footer';
import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar, Button, TextField } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { isOrg } from "../../util/auth";
import { getTrial,updateTrial } from "../../util/trial";
import {useHistory} from "react-router-dom";

function Trialedit(props) {
  const history=useHistory();
  const token = isOrg() && isOrg().token;
  const orgId = isOrg() && isOrg().org._id;
  const trialId=props.match.params.trialId;
  const [trial,setTrial]=useState({
    NCTId:"",
    studyBriefTitle:"",
    studyFormalTitle:"",
    gender: "",
    minAge: "",
    maxAge: "",
    city: "",
    state: "",
    country:"",
    zipCode:"",
    keyword:""
  });

  const {
    NCTId,
    studyBriefTitle,
    studyFormalTitle,
    gender,
    minAge,
    maxAge,
    city,
    state,
    country,
    zipCode,
    keyword
  }=trial;

  const handleChange=(name)=>(event)=>{
setTrial({...trial,[name]:event.target.value});
};
const handleSubmit=(event)=>{
event.preventDefault();
updateTrial(token,trialId,orgId,trial)
.then((data,err)=>{
  if(err){
    console.log(err)
  }else{
    alert("Updated trial successfully");
    history.push("/org");

  }
})

}

  useEffect(()=>{
    getTrial(token,trialId)
    .then((data, err) => {
      if(data){
        if (data.error)
          console.log(data.error)
        else {
          setTrial({
            NCTId:data.NCTId,
            studyBriefTitle:data.studyBriefTitle,
            studyFormalTitle:data.studyFormalTitle,
            gender: data.gender,
            minAge: data.minAge,
            maxAge: data.maxAge,
            city: data.city,
            state: data.state,
            country:data.country,
            zipCode:data.zipCode,
            keyword:data.keyword
          })
        }
      }

    })

  },[])
    return (
        <div>
            <Navbar />
            <div className="org_header">
                <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                <h1>{isOrg() && isOrg().org.name}</h1>
                <span>Clinical trials</span>
            </div>
            <div className="track" >
              {isOrg() && isOrg().org.name}<ArrowForwardIosIcon /> <span>Your Trial</span> <ArrowForwardIosIcon /> <span>Edit Trial</span>
            </div>
            <div className="field">
                <table className="checktable">
                    <tr className="rowt" >
                        <td>NCTId :</td>
                        <td className="field" ><TextField className="inputfield" name="NCTId" value={NCTId} onChange={handleChange("NCTId")}></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Study Title:</td>
                        <td className="field" ><TextField className="inputfield" name="studyBriefTitle" value={studyBriefTitle} onChange={handleChange("studyBriefTitle")}></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Study Description:</td>
                        <td className="field" ><TextField className="inputfield" name="studyFormalTitle" value={studyFormalTitle} onChange={handleChange("studyFormalTitle")}></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>City:</td>
                        <td className="field" ><TextField className="inputfield" name="city" value={city} onChange={handleChange("city")}></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>State:</td>
                        <td className="field" ><TextField className="inputfield" name="state" value={state} onChange={handleChange("state")}></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Country:</td>
                        <td className="field" ><TextField className="inputfield" name="country" value={country} onChange={handleChange("country")}></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Pin Code:</td>
                        <td className="field" ><TextField className="inputfield" name="zipCode" value={zipCode} onChange={handleChange("zipCode")}></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Gender:</td>
                        <td className="field" ><TextField className="inputfield" name="gender" value={gender} onChange={handleChange("gender")}></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Min Age: </td>
                        <td className="field" ><TextField className="inputfield" name="minAge" value={minAge} onChange={handleChange("minAge")}></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Max Age: </td>
                        <td className="field" ><TextField className="inputfield" name="maxAge" value={maxAge} onChange={handleChange("maxAge")}></TextField></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Keyword: </td>
                        <td className="field" ><TextField className="inputfield"name="keyword" value={keyword} onChange={handleChange("keyword")}></TextField></td>
                    </tr>
                </table>
            </div>
            <div className="buttonspace">
                <Button className="savebutton" variant="contained" onClick={handleSubmit}>Update Trial</Button>
            </div>
            <Footer />
        </div>
    )
}

export default Trialedit
