const express=require("express");
const router=express.Router();

const {orgById,orgProfileById,getProfile,postProfile,updateProfile,getAllProfiles}=require("../controllers/orgProfile");
const {requireSignin,isAuth}=require("../controllers/auth");


router.get("/orgprofile/:orgProfileId",getProfile);
router.post("/orgprofile/:orgId",
requireSignin,
isAuth,
postProfile
);
router.put("/orgprofile/:orgProfileId/:orgId",
requireSignin,
isAuth,
updateProfile
);
router.get("/orgprofile",getAllProfiles);

router.param("orgProfileId",orgProfileById);
router.param("orgId",orgById);

module.exports=router;
