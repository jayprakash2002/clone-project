
import mongoose from "mongoose";
let userSchema =  mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    gender:{
        type:String,
        enum:["male","female","other"],
        
    },
    age:{
        type:String,
        required:true,
    },
   
    bio:{
        type:String,
        default:"",
    },
    ProfileImage:{
        type:String,
        default:"",
    },
    followers:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
  
    },

    following:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",

    },

    posts:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",
       
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    bookMark :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",

    },
    lastLogin:{
        type:Date,
        default:Date.now,

    },
    passwordResettoken:{
      type:String,
        
    },
    resetTokenExpiry:{
       type:Date,
       
    },
    emailVerificationToken:{
        type:String,
        
    },
    verificationTokenExpiresAt:{
        type:Date,
        
    },

 },
 {
   
    timestamps:true,
 }
);



let user = mongoose.model("user",userSchema);
export default user;