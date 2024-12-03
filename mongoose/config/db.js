const mongoose  =require(`mongoose`);
const dotenv = require('dotenv');

const uri=process.env.URI_MONGODB;
const connectDB = async()=> {
    try{
await mongoose.connect(uri)
    .then(()=>console.log("established a connection to the dattabase"))
    .catch(err=> console.log("smth went wrong when connecting to the database",err));
    }catch(error){
        console.error(`erreur de connexion a MongoDB`,error.message);
        process.exit(1);
    }
};

module.exports = connectDB;