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
  Application.find().exec((err,app)=>{
    if(err){
      console.log(err)
    }
    else{
       if(app[0].trial==req.params.trialId)
       {
         UserProfile.find({user:app[0].applicant}).exec((err,data)=>{

           if(err)
           console.log(err)
           else{
            res.json(data)
           }
         })
       }



    }
  });
};
