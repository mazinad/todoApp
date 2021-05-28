const express = require('express');
const connectDB = require('./DB/connection');
const bodyParser=require('body-parser');
const app = express();
const Port = process.env.Port || 3000
const index = require('./route/index');
connectDB();
app.use(express.json({extended:false}));
app.use('/api',index);
app.use(bodyParser.json());
app.listen(Port, () => console.log('Server started'));