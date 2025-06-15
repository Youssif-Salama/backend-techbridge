import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
  title:String,
  description:String,
  requirements:String,
  level:{
    type:String,
    enum:["junior","middle","senior"]
  },
  education:{
    type:String,
    enum:["high school","university","master"]
  },
  experience:Number,
  salary:{
    from:Number,
    to:Number
  },
  appliers:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }],
  expiresAt:Date,
  makerId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"company"
  }
},{timestamps:true})

export default mongoose.model("job",jobSchema)