import mongoose from "mongoose";
const projectSchema=new mongoose.Schema({
  name:String,
  description:String,
  files:[
    {
      name:String,
      url:String
    }
  ],
  makerId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
},{timestamps:true});

export default mongoose.model("project",projectSchema)