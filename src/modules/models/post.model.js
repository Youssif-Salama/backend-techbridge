import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
  title:String,
  description:{
    type:String,
    required:true
  },
  hashtags:[String],
  likes:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  files:[
    {
      name:String,
      url:String
    }
  ],
  makerId:{
    type: mongoose.Schema.Types.ObjectId,
    refPath:"makerModel"
  },
  makerModel:{
    type:String,
    required:true,
    enum:["user","company"]
  }
},{timestamps:true})

export default mongoose.model("post",postSchema)