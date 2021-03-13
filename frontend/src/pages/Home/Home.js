import React,{useState} from 'react'
import Trial from '../../components/Trial/Trial'
import { Button } from '@material-ui/core';
import PolymerIcon from '@material-ui/icons/Polymer';
import FilterListIcon from '@material-ui/icons/FilterList';
import {useHistory} from "react-router-dom";
import {getTrials} from "../../util/filter";
import './Home.css'

function Home() {
    const history = useHistory();
    const [keyword,setKeyword]=useState("");
    const [trials,setTrials]=useState([]);

    const getResults = (e) => {
        e.preventDefault();
        getTrials(keyword)
.then(data=>{
  if(data.error){
    console.log(data.error)
  }else{
    console.log(data)
  setTrials(data)
  setKeyword("");
  }
});
}

    return (
        <div className="homecontainer" >
            <div className="upper_home">
                <div className="navbar_upper">
                    <div><PolymerIcon/></div>
                    <div>
                        <Button onClick={() => (history.push('./login')) } variant="contained" >Login</Button>
                        <span>need any help ?</span>
                    </div>
                </div>
                <div><span className="ctrials" >Clinical Trials</span></div>
                <div>
                    <form className="filterform" >
                        <span>Find Clinical Trials</span>
                        <input placeholder="search keyword" type="text" onChange={(e)=>setKeyword(e.target.value)}/>
                        <input placeholder="loacation" type="text" disabled/>
                        <div>
                        <Button className="navbutton1" variant="contained"  onClick={getResults}><FilterListIcon/> Filter</Button>
                        <Button className="navbutton2" variant="contained" disabled >Search</Button>
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="filer_res" >3 results found : Pune, India</div> */}
            <div className="lower_home">
              {trials.map((trial,i)=>(
  <div key={i}>
  <Trial trial={trial}/>
  </div>
))}
          </div>
        </div>
    )
}

export default Home
