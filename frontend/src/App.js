import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Org from "./pages/Org/Org";
import Signup from "./pages/Signup/Signup";
import User from "./pages/User/User";

function App() {
    return (
    <div className="App">
        <Router> 
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                {/* <Route exact path="/org" component={Org}/> */}
                {/* <Route exact path="/user" component={User}/> */}
                <Route exact path="/org" component={Org}/>
                <Route exact path="/user" component={User}/>
            </Switch>
        </Router>
    </div>
    );
}

export default App;
