
import mongoose from "mongoose";
let postSchema =  mongoose.Schema({
    caption:{
        type:String,
        default:"",
    },
    postImg:{
        type:String,
        require:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,
    },
    comments:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment",
   
    },
    //change the postname likes 
    like:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
  
    },
  
    //change the name save to  savedPosts
    savedPost:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",
  
    },


})

let Post =mongoose.model("post",postSchema);
export default Post;