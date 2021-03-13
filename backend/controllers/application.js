const User = require('../models/user');
const Org = require('../models/org');
const Trial = require('../models/trial');
const Application = require('../models/application');

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
  let applications=[];
  Application.find().exec((err,data)=>{
    if(err){
      return res.status(400).json({error:err});
    }
    else{
      data.forEach((app)=>{
       if(app.trial==req.params.trialId)
          applications.push(app)

      })
      res.json(applications)
    }
  });
};
