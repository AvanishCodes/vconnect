const User = require('../models/user');
const UserProfile = require('../models/userProfile');

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({error: 'User not found'});
        }
        req.profile = user;
        next();
    });
};

exports.userProfileById = (req, res, next, id) => {
    UserProfile.findById(id).exec((err, profile) => {
        if (err || !profile) {
            return res.status(400).json({error: 'User profile not found'});
        }
        req.userProfile = profile;
        next();
    });
};

exports.getProfile=(req,res)=>{
  return res.json(req.userProfile);
};

exports.getUserProfile=(req,res)=>{
  UserProfile.find({user:req.params.userId})
  .exec((err,profile)=>{
    if(err||!profile){
      return res.status(400).json({error: 'User profile not found'});
    }
    res.status(200).json(profile[0]);
  })
}

exports.postProfile=(req,res)=>{
  const user=req.profile;
  const data={
    ...req.body,
    user
  }
  const userProfile=new UserProfile(data)
  userProfile.save((err,data)=>{
    if(err){
      return res.status(400).json({error:err});
    }
    res.json(data);
  });
};

exports.updateProfile=(req,res)=>{
  UserProfile
    .findOneAndUpdate({_id:req.params.userProfileId}, req.body)
    .exec(function(err, profile){
      if(err) return res.status(500).json({err: err.message});
      res.json({message: 'Successfully updated'})
    });
};

exports.getAllProfiles=(req,res)=>{
  UserProfile.find().exec((err,data)=>{
    if(err){
      return res.status(400).json({error:err});
    }
    res.json(data);
  });
};
