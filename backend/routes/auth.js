const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  signout
} = require("../controllers/auth");
const { signupValidator } = require("../middleware/validators");

router.post("/signup", signupValidator, signup);
router.post("/login", login);
router.get("/signout", signout);

module.exports = router;
