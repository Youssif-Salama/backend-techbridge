import mongoose from "mongoose";

const applicationSchema=new mongoose.Schema({
  jobId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"job"
  },
  userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  },
  cover:String,
  resume:{
    name:String,
    url:String
  }
},{timestamps:true});

export default mongoose.model("application",applicationSchema)