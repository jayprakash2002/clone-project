import mongoose from "mongoose";



let commentSchema = mongoose.Schema(
   {
     comment:{type :String , require :true },
     author:{type: mongoose.Schema.Types.ObjectId, ref:"User",require:true},
     post:{type: mongoose.Schema.Types.ObjectId, ref:"Post",require: true},
     //createdAt:{type: Data,default:Data.now},
     //updateAt:{type: Data,default:Data.now},

    },

    {
        timestamps:true,
    }
);

let Comment =mongoose.model("Comment",commentSchema);
export default Comment;









