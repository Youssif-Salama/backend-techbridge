import mongoose from "mongoose";

const friendSchema=new mongoose.Schema({
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
  }
},{timestamps:true})

export default mongoose.model("friend",friendSchema)