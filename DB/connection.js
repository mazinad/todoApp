const mongoose=require('mongoose')

const URI="mongodb+srv://dan:dbUser@cluster0.bit0v.mongodb.net/DiaryApp?retryWrites=true&w=majority";

const connectDB=async()=>{
await mongoose.connect(URI,{ useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex: true,
    useFindAndModify: true,
});
console.log('db connected');
}

module.exports=connectDB;