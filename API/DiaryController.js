
const diary=require('../Models/Diary')
const mongoose=require('mongoose')

exports.post1=async(req,res,next)=>{
    const Diary=new diary({
        title:req.body.title,
        description:req.body.description,
        owner:req.user._id
    })
    try {
        const item=await Diary.save();
        res.send({
            message:'Saved Memo',
            data:item
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({error:error});
    }
}
exports.get1=async(req,res,next)=>{
    const dean=await diary.find({}).then((dean)=>{
        res.send(dean);
    })
}
exports.getone=async(req,res,next)=>{
    const _id=req.params._id;
    try {
        const Diary=await diary.findOne({_id, owner: req.user._id})
        if(!Diary){
            res.status(400).send('NO Diary found');

        }
        res.send({
            message:'Diary Found',
            Diary:{Diary}
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
}
exports.delete=async(req,res,next)=>{
    const _id=req.params._id;
    try {
        const Diary=await diary.findOne({_id, owner: req.user._id})
        if(!Diary){
            res.status(400).send('NO Diary found');

        }
}catch(e){
    res.status(500).send(error.message);
}}
exports.update=async(req,res,next)=>{
    const Diary=new diary({
         _id:req.params._id,
        title:req.body.title,
        description:req.body.description
    })
    diary.updateOne({ _id:req.params._id},diary).then(()=>{
        res.status(200).send({
            message:'Update succesful',

        })
    }).catch((e)=>{
        res.status(400).json({
            e:e
        });
    })
}