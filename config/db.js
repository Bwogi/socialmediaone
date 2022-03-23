const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI')

const connectDB = async () =>{
try{
   await mongoose.connect(db, {
        // object helps with deprecated functionality. It must be used
        useNewUrlParser: true, 
    })
    console.log('Database connected ...')
}catch(err){
    console.error(err.message)
    process.exit(1); // exit process with a failure
}
}

module.exports = connectDB