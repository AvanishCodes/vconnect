const Org = require('../models/org');
const OrgProfile = require('../models/orgProfile');

exports.orgById = (req, res, next, id) => {
    Org.findById(id).exec((err, org) => {
        if (err || !org) {
            return res.status(400).json({error: 'Org not found'});
        }
        req.profile = org;
        next();
    });
};

exports.orgProfileById = (req, res, next, id) => {
    OrgProfile.findById(id).exec((err, profile) => {
        if (err || !profile) {
            return res.status(400).json({error: 'Org profile not found'});
        }
        req.orgProfile = profile;
        next();
    });
};

exports.getProfile=(req,res)=>{
  return res.json(req.orgProfile);
};

exports.postProfile=(req,res)=>{
  const org=req.profile;

  const data={
    ...req.body,
    org
  }
  const orgProfile=new OrgProfile(data)
  orgProfile.save((err,data)=>{
    if(err){
      return res.status(400).json({error:err});
    }
    res.json(data);
  });
};

exports.updateProfile=(req,res)=>{
  OrgProfile
    .findOneAndUpdate({_id:req.params.orgProfileId}, req.body)
    .exec(function(err, profile){
      if(err) return res.status(500).json({err: err.message});
      res.json({message: 'Successfully updated'})
    });
};

exports.getAllProfiles=(req,res)=>{
  OrgProfile.find().exec((err,data)=>{
    if(err){
      return res.status(400).json({error:err});
    }
    res.json(data);
  });
};
