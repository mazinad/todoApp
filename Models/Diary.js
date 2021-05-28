const mongoose=require('mongoose');

const createDiary=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
    
},
    {timestamps:true
    }
)
module.exports=diary=mongoose.model('diary',createDiary)