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
import Signup from "./pages/Signup/Signup";
import Trialedit from "./pages/Trialedit/Trialedit";
import User from "./pages/User/User";
import UserAcc from "./pages/UserAcc/UserAcc";
import OrgAcc from "./pages/Userdetails/Userdetails";
import Userdetails from "./pages/Userdetails/Userdetails"

function App() {
    return (
    <div className="App">
        <Router> 
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/userdetails" component={Userdetails}/>
                <Route exact path="/orgacc" component={OrgAcc}/>
                <Route exact path="/useracc" component={UserAcc}/>
                <Route exact path="/org" component={Org}/>
                <Route exact path="/org/trialedit" component={Trialedit}/>
                <Route exact path="/user" component={User}/>
                <Route exact path="/user/checkapp" component={CheckApp}/>
            </Switch>
        </Router>
    </div>
    );
}

export default App;
