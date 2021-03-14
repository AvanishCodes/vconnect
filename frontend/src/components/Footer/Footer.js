import React from 'react'
import PolymerIcon from '@material-ui/icons/Polymer';
import { Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.css'

function Footer() {
    return (
        <div className="footermain">
                <div className="footer_upper">
                    <div className="footlogo">< PolymerIcon/></div>
                    <div className="footer_options" >
                        <div>Copyright</div>
                        <div>HackBash</div>
                        <div>Privacy Policy</div>
                        <div>Clinical Trials India</div>
                        <div>Terms of Use</div>
                        <div>Careers</div>
                        <div>Right to Information</div>
                        <div>Insights</div>
                    </div>
                    <div className="footbutton" >
                        <Button variant="contained">Contact</Button>
                    </div>
                </div>
            <hr/>
            <div className="footerlinks" >
                <div>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <FacebookIcon/>
                    <LinkedInIcon/>
                </div>
            </div>
        </div>
    )
}

export default Footer
