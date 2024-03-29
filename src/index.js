// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()




// import express from "express"
// const app = express()

/*

;(async () => { // that semicolon before IIFE is a good practise
    try{
        await mongoose.connect('${process.env.MONGODB_URI}/${DB_NAME}')
        app.on("error", (err)=>{
            console.log("ERROR: ", err);
            throw err;

        }) // generic Node.js EventEmitter method

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("ERROR: ", error)
        throw error // wrong practice
        // error is thrown from try block and caught by catch block
    }
} )()

*/