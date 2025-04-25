import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
  fromId:{
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'makerModel'
  },
  toId:{
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'makerModel'
  },
  makerModel:{
    type:String,
    required:true,
    enum:["user","company"]
  },
  message:String,
  files:[
    {
      name:String,
      url:String
    }
  ],
  seen:{
    type:Boolean,
    default:false
  }
},{timestamps:true});

export default mongoose.model("message",messageSchema)