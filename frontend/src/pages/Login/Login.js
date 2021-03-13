import React, { useState } from 'react';
import { Button, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useHistory } from "react-router-dom";
import { login, authenticate } from "../../util/auth";
import './Login.css';

function Login() {

    const [email, setmail] = useState("")
    const [password, setpassword] = useState("")
    const [error, setError] = useState("");

    const history = useHistory();
    const handlelogin = (e) => {
        e.preventDefault();
        login({ email, password })
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                    setError(data.error)
                } else {
                    authenticate(data, () => {
                        if (data.org)
                            history.push("/org")
                        else {
                            history.push("/user")
                        }
                    });
                }
            });

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
                    <input className="login_input" value={email} placeholder="Your Email" type="email" name="email" onChange={(e) => setmail(e.target.value)} />
                    Password
                    <input className="login_input" value={password} placeholder="Your Password" type="password" name="password" onChange={(e) => setpassword(e.target.value)} />
                    </form>
                    <p >forgot password</p>
                    {error && <Typography style={{
                        color: "red",
                        fontSize: "0.9rem",
                        marginTop: 5
                    }}>{error}</Typography>}
                    <Button className="login_button" variant="contained" onClick={handlelogin} ><ArrowForwardIcon /></Button>
                </div>
                <div className="login-lower" >dont have an accout ?  <span onClick={() => history.push('./signup')} >Sign up</span></div>
                <div className="login-lower" >I'm here just to roam around  <span onClick={() => history.push('./')} >Take me home</span></div>

            </div>
        </div>
    )
}

export default Login
