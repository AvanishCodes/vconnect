const User = require('../models/user');
const Org = require('../models/org');
const Trial = require('../models/trial');
const Application = require('../models/application');
const UserProfile = require('../models/userProfile');
exports.applicationById = (req, res, next, id) => {
    Application.findById(id).exec((err, application) => {
        if (err || !application) {
            return res.status(400).json({error: 'Application not found'});
        }
        req.application = application;
        next();
    });
};


exports.getApplication=(req,res)=>{
return res.json(req.application);
};

exports.postApplication=(req,res)=>{
  const trial=req.trial;
  const applicant=req.profile;
  const data={
    ...req.body,
    trial,
    applicant
  }
  const application=new Application(data)
  application.save((err,data)=>{
    if(err){
      return res.status(400).json({error:err});
    }
    res.json(data);
  });
};

exports.getAllApplications=(req,res)=>{
if(req.trial.org==req.params.orgId){
  //console.log(req.params.trialId)
  Application.find({trial:req.params.trialId})
  .exec((err,data)=>{
    //console.log(data);
    if(err){
      return res.status(400).json({error:"No application"});
    }
    res.status(200).json(data);
  })
}
}
