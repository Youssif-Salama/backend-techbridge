import mongoose from "mongoose";
const educationSchema=new mongoose.Schema({
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

export default mongoose.model("education",educationSchema)