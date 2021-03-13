const User = require("../models/user");
const Org = require("../models/org");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const { JWT_SECRET } = require('../config/keys');

exports.signup = (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }
  if (req.body.isOrg === "true") {
    const org = new Org(data);
    org.save((err, org) => {
      if (err) {
        return res.status(400).json({ error: 'Email is taken.' });
      }
      org.salt = undefined;
      org.hashed_password = undefined;
      const token = jwt.sign({ _id: org._id }, JWT_SECRET);
      res.cookie("t", token, { expire: new Date() + 9999 })
      const { _id, name, email } = org;
      return res.json({ token, org: { _id, email, name, type: "org" } })
    });
  } else {
    const user = new User(data);
    user.save((err, user) => {
      if (err) {
        return res.status(400).json({ error: 'Email is taken' });
      }
      user.salt = undefined;
      user.hashed_password = undefined;
      const token = jwt.sign({ _id: user._id }, JWT_SECRET);
      res.cookie("t", token, { expire: new Date() + 9999 })
      const { _id, name, email } = user;
      return res.json({ token, user: { _id, email, name, type: "user" } })
    });
  }
};

exports.login = (req, res) => {
  const data = {
    email,
    password,
  } = req.body;

  Org.findOne({ email }, (err, org) => {
    if (org) {
      if (!org.authenticate(password)) {
        return res.status(401).json({ error: "Email and password don't match" });
      }

      //generate a signed token with org id
      const token = jwt.sign({ _id: org._id }, JWT_SECRET);
      res.cookie("t", token, { expire: new Date() + 9999 })
      const { _id, name, email } = org;
      return res.json({ token, org: { _id, email, name, type: "org" } })
    } else {
      User.findOne({ email }, (err, user) => {
        if (err || !user) {
          return res.status(400).json({ error: "Email does not exist" });
        }

        if (!user.authenticate(password)) {
          return res.status(401).json({ error: "Email and password don't match" });
        }

    //generate a signed token with user id
    const token=jwt.sign({_id:user._id},JWT_SECRET);
    res.cookie("t",token,{expire:new Date()+9999})
    const {_id,name,email}=user;
    return res.json({token,user:{_id,email,name,type:"user"}})
  })
  }
});


}

exports.signout = (req, res) => {
  res.clearCookie("t")
  res.json({ message: "Signout successfully" });
};

exports.requireSignin = expressJwt({
  secret: JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: "auth",
});

exports.isAuth=(req,res,next)=>{
 let user = req.profile && req.auth && req.profile._id == req.auth._id;

  if(!user){
    return res.status(403).json({error:"Access denied"});
  }
  next();
};
