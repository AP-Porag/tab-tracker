/*
*external imports
*/
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


/*
*internal imports
*/
const authRouter = require('./routes/auth');


//initializing app
const app = express();
dotenv.config();

//database connection
let database = process.env.DB_NAME
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(()=>{
    console.log(`database connected successfully- DB name:  ${database}`);
}).catch((err)=>{
    console.log(err);
});
// mongoose.connect(process.env.MONGO_CONNECTION_STRING,{
//     useNewUrlParser:true,
// }).then(()=>{
//     console.log(`database connected successfully- DB name:  ${database}`);
// }).catch((err)=>{
//     console.log(err);
// });



//giving the permission for request && processing request
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());


//declaring api/route
app.use('/api/auth',authRouter);


//listening port/start the app
let port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);
})