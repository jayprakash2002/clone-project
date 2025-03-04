import mongoose from "mongoose";

let connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
            console.log("MongoDB Connected...");
    }catch(err){
        console.error("Error connecting MongoDB:", err.message );
    }
};

export default connectDB;