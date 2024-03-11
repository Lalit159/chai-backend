import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () =>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nMongoDB connected !!! DB Host: ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("MONGODB connection error: ", error)
        process.exit(1) // process is a global object, controlling the current node.js process
    }
}

export default connectDB