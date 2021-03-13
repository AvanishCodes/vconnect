const express=require("express");
const router=express.Router();

const {orgById}=require("../controllers/orgProfile");
const {userById}=require("../controllers/userProfile");
const {trialById,getTrial,postTrial,updateTrial,getAllTrials,trialSearch,getFilteredTrials}=require("../controllers/trial");
const {requireSignin,isAuth}=require("../controllers/auth");


router.get("/trial/:trialId",getTrial);
router.post("/trial/:orgId",
requireSignin,
isAuth,
postTrial
);
router.put("/trial/:trialId/:orgId",
requireSignin,
isAuth,
updateTrial
);
router.get("/trial/filter/:userId",
requireSignin,
isAuth,
getFilteredTrials
);
router.get("/trial",getAllTrials);
router.get("/search",trialSearch);

router.param("trialId",trialById);
router.param("orgId",orgById);
router.param("userId",userById);

module.exports=router;
