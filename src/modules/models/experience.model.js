import mongoose from "mongoose";
const experienceSchema=new mongoose.Schema({
  name:String,
  description:String,
  files:[
    {
      name:String,
      url:String
    }
  ],
  from:Date,
  to:Date,
  makerId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
},{timestamps:true});

export default mongoose.model("experience",experienceSchema)