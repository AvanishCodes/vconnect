import React,{Component} from "react";
import {Route,Redirect} from "react-router-dom";
import {isUser} from "../util/auth";

const UserRoute=({component:Component,...rest})=>(
  <Route {...rest} render={props=>isUser()?(
    <Component {...props}/>
  ):(
    <Redirect to={{pathname:"/login",state:{from:props.location}}}/>
  )}/>
)

export default UserRoute;
