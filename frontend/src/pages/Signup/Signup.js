import React , { useState } from 'react'
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {useHistory} from "react-router-dom";
import './Signup.css';

function Signup() {

    const [mail, setmail] = useState("")
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [status, setstatus] = useState("")
    const [carddetail, setcarddetail] = useState("")
    const history = useHistory();

    const handlesignup = (e) => {
        e.preventDefault();
        console.log(mail , password ,name ,status,carddetail);
        setcarddetail("")
        setname("")
        setmail("")
        setpassword("")
    }
    return ( 
        <div className="signup_container">
            <div className="signup_left">
            <div className="signup_header"><h1>Sign <span>Up</span></h1></div>
            <div className="signup_upper" >
                <input className="checker" type="radio"  onChange={(e) => setstatus(e.target.value)} id="av" name="status" value="I want to volunteer"/>
                    <label for="male">I want to volunteer</label> <br/>
                <input className="checker" type="radio"  onChange={(e) => setstatus(e.target.value)} id="unav" name="status" value="We will run(are running) a trial"/>
                    <label for="female">We will run(are running) a trial</label><br/>
            </div>
            <div className="upper_container">
                <form className="signup_form">
                    <div className="mid_signup">
                        <div className="inmid_signup" >
                            Name
                            <input className="signup_input" value={name} placeholder="Your name" type="text" name="name" onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div className="inmid_signup" >
                            email
                            <input className="signup_input" value={mail} placeholder="Your Email" type="email" name="email" onChange={(e) => setmail(e.target.value)} />
                        </div>
                    </div>
                    Password
                    <input className="login_input"value={password} placeholder="Your Password" type="password" name="password" onChange={(e) => setpassword(e.target.value)}/>
                </form>
                    <p ><input type="radio" id="pay" name="carddetail" onChange={(e) => setcarddetail(e.target.value)} value="Save credit card information for the next time"/>
                        <label className="paylabel" for="pay">Save credit card information for the next time.</label>
                    </p>
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
