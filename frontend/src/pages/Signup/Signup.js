import React , { useState } from 'react'
import { Button,Typography} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useHistory} from "react-router-dom";
import './Signup.css';
import image from "../../images/log.jpeg";

import {signup,authenticate} from "../../util/auth";
function Signup() {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setpassword] = useState("")
    const [isOrg, setisOrg] = useState("")
    const [carddetail, setcarddetail] = useState("")
    const [error,setError]=useState("")
    const history = useHistory();

    const handlesignup = (e) => {
        e.preventDefault();
        signup({email,password,name,isOrg})
.then(data=>{
  if(data.error){
    //console.log(data.error)
    setError(data.error)
  }else{
  authenticate(data,()=>{
    if(data.org)
    history.push("/orgacc")
    else {
      history.push("/useracc")
    }
  });
  }
});

    }
    return (
        <div className="signup_container">
            <div className="signup_left">
            <div className="signup_header"><h1>Sign <span>Up</span></h1></div>
            <div className="signup_upper" >
                <input className="checker" type="radio"  onChange={(e) => setisOrg(e.target.value)} id="av" name="isOrg" value="false"/>
                    <label for="male">I want to volunteer</label> <br/>
                <input className="checker" type="radio"  onChange={(e) => setisOrg(e.target.value)} id="unav" name="isOrg" value="true"/>
                    <label for="female">We will run(are running) a trial</label><br/>
            </div>
            <div className="upper_container">
                <form className="signup_form">
                    <div className="mid_signup">
                        <div className="inmid_signup" >
                            Name
                            <input className="signup_input" value={name} placeholder="Your name" type="text" name="name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="inmid_signup" >
                            email
                            <input className="signup_input" value={email} placeholder="Your Email" type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    Password
                    <input className="login_input"value={password} placeholder="Your Password" type="password" name="password" onChange={(e) => setpassword(e.target.value)}/>
                </form>
                    <p ><input type="radio" id="pay" name="carddetail" onChange={(e) => setcarddetail(e.target.value)} value="Save credit card information for the next time"/>
                        <label className="paylabel" for="pay">Save credit card information for the next time.</label>
                    </p>
                    {error&&<Typography style={{color:"red",
    fontSize:"0.9rem",
    marginTop:5}}>{error}</Typography>}
                    <Button className="login_button" variant="contained" onClick={handlesignup} ><ArrowForwardIcon/></Button>
            </div>
            <div className="login-lower" >Already have an accout ?  <span onClick={() => history.push('./login') }>Sign in</span></div>
            </div>

            <div className="signup_right">
            </div>
        </div>
    )
}

export default Signup
