const express=require('express');
const route=express.Router();
const userRoute=require('./User');
const diaryRoute=require('./diary');
route.use('/user',userRoute);
route.use('/diary',diaryRoute);

module.exports=route;