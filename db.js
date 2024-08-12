const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config();

async function connectDB(){

    await mongoose.connect(process.env.MONGO_URL , {
        dbName: 'CarRental',
    }).then((response) => {
        console.log('Mongo DB Connection Successfull')
        
    }).catch((err) => {
        console.log('Mongo DB Connection Error')
    })

    // const connection = mongoose.connection
    // console.log(connection);

    // connection.on('connected' , ()=>{
    //     console.log('Mongo DB Connection Successfull')
    // })

    // connection.on('error' , ()=>{
    //     console.log('Mongo DB Connection Error')
    // })


}

module.exports = connectDB
// connectDB()

// module.exports = mongoose