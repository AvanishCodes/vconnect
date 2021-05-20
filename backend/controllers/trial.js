const Org = require('../models/org');
const Trial = require('../models/trial');
const User = require('../models/user');
const UserProfile = require('../models/userProfile');

exports.trialById = (req, res, next, id) => {
    Trial.findById(id).exec((err, trial) => {
        if (err || !trial) {
            return res.status(400).json({error: 'Trial not found'});
        }
        req.trial = trial;
        next();
    });
};

exports.getTrial=(req,res)=>{
  return res.json(req.trial);
};

exports.postTrial=(req,res)=>{
  const org=req.profile;

  const data={
    ...req.body,
    org
  }
  const trial=new Trial(data)
  trial.save((err,data)=>{
    if(err){
      return res.status(400).json({error:err});
    }
    res.json(data);
  });
};

exports.updateTrial=(req,res)=>{
  Trial
    .findOneAndUpdate({_id:req.params.trialId}, req.body)
    .exec(function(err, trial){
      if(err) return res.status(500).json({err: err.message});
      res.json({message: 'Successfully updated'})
    });
};

exports.getAllTrials=(req,res)=>{
  Trial.find({org:req.params.orgId}).exec((err,data)=>{
    if(err){
      return res.status(400).json({error:err});
    }
    res.json(data);
  });
};

exports.trialSearch=(req,res)=>{
  //console.log(req.query)
Trial.find({keyword:{$regex:req.query.keyword,$options:'i'}})
.exec((err,trial)=>{
  if(err){
    return res.status(400).json("No trial found");

  }
  res.status(200).json(trial);
})
}

exports.getFilteredTrials=(req,res)=>{
  let results=[];
  UserProfile.find({ user:req.params.userId })
.exec((err,profile)=>{
  if(err||!profile[0]){
    return res.status(400).json({error:"No profile found"})
  }else{
    let query={
      city:profile[0].city,
      keyword:profile[0].keyword
    }
    console.log(query)
    Trial.find(query,(err,trial)=>{
      if(!trial)
      res.status(400).json({error:"Trial not found"})
      else {
        trial.forEach(t=>{
          if(profile[0].age>=t.minAge&&profile[0].age<=t.maxAge){
            if(t.gender=="all"||t.gender!="all"&&t.gender==profile[0].gender)
            results.push(t);
          }
        })
        res.json(results);
      }
    });
  }



})
}
