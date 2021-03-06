const express = require('express');
const  userRouter= express.Router();

const passport = require('passport');
const User = require('../Models/user');
const authenticate= require('../authenticate');

userRouter.post("/register",function(req,res){

    User.register(new User({username: req.body.username,name:req.body.name
    ,contact: req.body.contact,roll:req.body.roll}), 
    req.body.password, (err, user) => {
    if(err) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.json({err: err});
    }
    else {
      passport.authenticate('local')(req, res, () => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({success: true, status: 'Registration Successful!'});
      });
    }
  })
})

userRouter.post('/login',passport.authenticate('local'),(req,res)=>{
    var token = authenticate.getToken({_id: req.user._id});
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true,token:token,user:req.user.username, status: 'You are successfully logged in!'});
    })

userRouter.get("/logout",function(req,res){

    req.logout();
    res.json({success:true, status:" Logged out success"})
})
  
module.exports = userRouter;