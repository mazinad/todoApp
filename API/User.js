const express =require('express');
const mongoose=require('mongoose');
const User=require('../Models/User');
const route=express.Router();

// route.post('/',async(req,res)=>{
//     const {firstName,lastName}=req.body;
//     let use={};
//     use.firstName=firstName;
//     use.lastName=lastName;
//     let userModel=new User(use);
//     await userModel.save();
//     res.json(userModel);
// })
exports.createUser=async(req,res)=>{
    const use=new User({
        email:req.body.email,
        password:req.body.password
    })
    try{
        const data=await use.save();
        const token=await use.generateAuthToken();
        res.send({
            message:"created Succcesfully",
            use:data,
            token:token
        })
    }catch(e){
        res.status(400).send(e.message);
    }
}

exports.loginUser = async(req,res)=>{
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
 
        res.send({user, token})
    } catch (error) {
        res.send(error.message)
    }
 }
 
 exports.getUSer = async(req,res)=>{
       res.send(req.user)
 }
 exports.logout = async(req,res)=>{
     try {
         req.user.tokens = req.user.tokens.filter((token)=>{
             return token.token !== req.token
         })
         await req.user.save()
         res.send()
     } catch (error) {
         res.status(500).send()
     }
 }