import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from "react-router-dom";
import './Login.css';

function Login() {

    const [mail, setmail] = useState("")
    const [password, setpassword] = useState("")

    const history = useHistory();
    const handlelogin = (e) => {
        e.preventDefault();
        console.log(mail, password);
        setmail("")
        setpassword("")
    }
    return (
        <div className="login_container">
            <div className="login_left">
            </div>

            <div className="login_right">
                <div className="login_header"><h1>Log <span>in</span></h1></div>
                <div className="upper_container">
                    <form className="login_form">
                        Email
                    <input className="login_input" value={mail} placeholder="Your Email" type="email" name="email" onChange={(e) => setmail(e.target.value)} />
                    Password
                    <input className="login_input" value={password} placeholder="Your Password" type="password" name="password" onChange={(e) => setpassword(e.target.value)} />
                    </form>
                    <p >forgot password</p>
                    <Button className="login_button" variant="contained" onClick={handlelogin} ><ArrowForwardIcon /></Button>
                </div>
                <div className="login-lower" >dont have an accout ?  <span onClick={() => history.push('./signup')} >Sign up</span></div>
                <div className="login-lower" >I'm here just to roam around!<span onClick={() => history.push('./')}>Take me home</span></div>
            </div>
        </div>
    )
}

export default Login
