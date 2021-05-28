const mongoose=require('mongoose')
require('dotenv').config();
const URI=process.env.dbConnection;

const connectDB=async()=>{
await mongoose.connect(URI,{ useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex: true,
    useFindAndModify: true,
});
console.log('db connected');
}

module.exports=connectDB;