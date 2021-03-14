import Footer from '../../components/Footer/Footer';
import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './UserAcc.css'
import {isUser} from "../../util/auth";
import {postUserProfile} from "../../util/userProfile";

function UserAcc() {
  const token=isUser().token;
  const userId=isUser().user._id;
    const [profile,setProfile]=useState({
      healthCondition:"",
      age:"",
      gender:"",
      keyword:"",
      al1:"",
      city:"",
      state:"",
      country:"",
      zipCode:""
    })
    const {healthCondition,
    age,
    gender,
    keyword,
    al1,
    city,
    state,
    country,
    zipCode}=profile;
    const handleChange=(name)=>(event)=>{
  setProfile({...profile,error:false,[name]:event.target.value});
};
const handleSubmit=(event)=>{
  event.preventDefault()
  postUserProfile(token,userId,profile)
  .then(data=>{
    if(data.error){
      console.log(data.error)
    }else{
      setProfile({
        ...profile,
        healthCondition:"",
        age:"",
        gender:"",
        keyword:"",
        al1:"",
        city:"",
        state:"",
        country:"",
        zipCode:""

      })
    }

  })
}


    return (
        <div>
            <Navbar />
            <div className="org_header">
                    <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                    <h1>{isUser().user.name}</h1>
                    <span>Clinical trials</span>
                </div>
                <div className="track" >
                  {isUser().user.name}<ArrowForwardIosIcon /> <span>Account</span>
                </div>
                <div className="field">
                <table className="orgtable">
                    <tr className="rowt" >
                        <td>Health Condition:</td>
                        <td className="field" ><input placeholder="health condition" name="healthCondition" value={healthCondition} type="boolean" onChange={handleChange("healthCondition")} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Gender: </td>
                        <td className="field field2" name="gender" value={gender} onChange={handleChange("gender")}>
                        <input type="radio" id="male" name="gender" value="Male" />
                    <label for="Male">Male</label>
                    <input type="radio"  id="female" name="gender" value="Female" />
                    <label for="Female">Female</label>
                    <input type="radio"  id="others" name="gender" value="All" />
                    <label for="All">Both</label>
                        </td>
                    </tr>
                    <tr className="rowt" >
                        <td>Age: </td>
                        <td className="field" ><input placeholder="Age" type="number" name="age" value={age} onChange={handleChange("age")} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Keyword: </td>
                        <td className="field" ><input placeholder="Keyword" type="text" name="keyword" value={keyword} onChange={handleChange("keyword")} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Address:</td>
                        <td className="field" ><input placeholder="Adddress" type="text"value={al1} name="al1" onChange={handleChange("al1")} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>City:</td>
                        <td className="field" ><input placeholder="City" type="text"value={city} name="city" onChange={handleChange("city")} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>State:</td>
                        <td className="field" ><input placeholder="State" type="text" value={state} name="state" onChange={handleChange("state")} /></td>
                    </tr>
                    <tr className="rowt" >
                        <td>Country:</td>
                        <td className="field" ><input placeholder="Country" type="text" value={country} name="country" onChange={handleChange("country")} />  </td>
                    </tr>
                    <tr className="rowt" >
                        <td>Zipcode: </td>
                        <td className="field" ><input placeholder="zipcode" type="number" name="zipCode" value={zipCode} onChange={handleChange("zipCode")} /></td>
                    </tr>

                </table>
            </div>
            <div className="savebuton">
            <Button  variant="contained" onClick={handleSubmit}>save changes</Button>
            </div>

        </div>
    )
}

export default UserAcc
