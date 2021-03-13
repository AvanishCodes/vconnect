const express=require("express");
const router=express.Router();

const {userById}=require("../controllers/userProfile");
const {orgById}=require("../controllers/orgProfile");
const {trialById}=require("../controllers/trial");
const {applicationById,getApplication,postApplication,getAllApplications}=require("../controllers/application");
const {requireSignin,isAuth}=require("../controllers/auth");


router.get("/application/:orgId/:applicationId",requireSignin,isAuth,getApplication);
router.post("/application/:trialId/:userId",
requireSignin,
isAuth,
postApplication
);
router.get("/application/all/:trialId/:orgId",requireSignin,isAuth,getAllApplications);

router.param("applicationId",applicationById);
router.param("userId",userById);
router.param("orgId",orgById);
router.param("trialId",trialById);

module.exports=router;
