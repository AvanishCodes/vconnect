import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import CheckApp from "./pages/CheckApp/CheckApp";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Org from "./pages/Org/Org";
import OrgCheckApp from "./pages/Orgcheckapp/OrgCheckApp";
import Signup from "./pages/Signup/Signup";
import Trialedit from "./pages/Trialedit/Trialedit";
import User from "./pages/User/User";
import UserAcc from "./pages/UserAcc/UserAcc";
import OrgAcc from "./pages/OrgAcc/OrgAcc";
import Userdetails from "./pages/Userdetails/Userdetails";

import OrgRoute from "./routes/OrgRoute";
import UserRoute from "./routes/UserRoute";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <UserRoute exact path="/userdetails" component={Userdetails}/>
                <OrgRoute exact path="/orgacc" component={OrgAcc}/>
                <UserRoute exact path="/useracc" component={UserAcc}/>
                <OrgRoute exact path="/org" component={Org}/>
                <OrgRoute exact path="/org/trialedit" component={Trialedit}/>
                <UserRoute exact path="/user" component={User}/>
                <UserRoute exact path="/user/checkapp" component={CheckApp}/>
                <OrgRoute exact path="/org/checkapp" component={OrgCheckApp}/>
            </Switch>
        </Router>
    );
}

export default App;
