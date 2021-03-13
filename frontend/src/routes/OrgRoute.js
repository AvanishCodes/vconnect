import React,{Component} from "react";
import {Route,Redirect} from "react-router-dom";
import {isOrg} from "../util/auth";

const OrgRoute=({component:Component,...rest})=>(
  <Route {...rest} render={props=>isOrg()?(
    <Component {...props}/>
  ):(
    <Redirect to={{pathname:"/login",state:{from:props.location}}}/>
  )}/>
)

export default OrgRoute;
