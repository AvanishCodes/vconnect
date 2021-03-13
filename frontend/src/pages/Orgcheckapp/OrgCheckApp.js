import React,{useState,useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Avatar } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {isOrg} from "../../util/auth";
import {getAllApplication} from "../../util/application";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
//import './OrgcheckApp.css'
function OrgCheckApp({match}) {
const [application,setApplication]=useState([]);
const orgToken=isOrg()&&isOrg().token;
const orgId=isOrg()&&isOrg().org._id;

function createData(sno,health,age,gender,city) {
  return { sno,health,age,gender,city };
}


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
useEffect(()=>{
  const trialId=match.params.trialId;
  getAllApplication(orgToken,trialId,orgId)
  .then((data)=>{
    setApplication(data)
  })
},[])
  const classes = useStyles();
    return (
        <div>
            <Navbar />
            <div className="org_header">
                    <Avatar className="orgavatar" src="https://cdn.corporatefinanceinstitute.com/assets/types-of-organizations1.jpeg" alt="org" />
                    <h1>{isOrg().org.name}</h1>
                    <span>Clinical trials</span>
                </div>
                <div className="track" >
                    {isOrg().org.name} <ArrowForwardIosIcon /> <span>Your Trials</span> <ArrowForwardIosIcon /> <span>Check Application</span>
                </div>
                <div className="lower_home"   style={{justifyContent:"center"}}>
                  <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S. No</StyledTableCell>
            <StyledTableCell align="right">Health Condition</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">City</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
                </div>

        </div>
    )
}

export default OrgCheckApp
