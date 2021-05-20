const express = require("express");
const router = express.Router();

const { userById, userProfileById, getProfile, postProfile, updateProfile, getAllProfiles, getUserProfile } = require("../controllers/userProfile");
const { requireSignin, isAuth } = require("../controllers/auth");


router.get("/userprofile/:userProfileId", getProfile);
router.post("/userprofile/:userId",
    requireSignin,
    isAuth,
    postProfile
);
router.put("/userprofile/:userProfileId/:userId",
    requireSignin,
    isAuth,
    updateProfile
);
router.get("/userprofile", getAllProfiles);
router.get("/userprofile/user/:userId",requireSignin,isAuth,getUserProfile);

router.param("userProfileId", userProfileById);
router.param("userId", userById);

module.exports = router;
