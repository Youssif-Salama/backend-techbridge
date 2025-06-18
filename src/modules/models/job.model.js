import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
  title:{type:String,required:true},
  description:{type:String,required:true},
  requirements:String,
  level:{
    type:String,
    enum:["junior","middle","senior"],
    required:true
  },
  education:{
    type:String,
    enum:["high school","university","master"]
  },
  experience:{
    type:Number,
    required:true
  },
  salary:{
    from:{
      type:Number,
      required:true
    },
    to:Number
  },
  appliers:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }],
  expiresAt:Date,
  makerId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"company",
    required:true
  }
},{timestamps:true})

export default mongoose.model("job",jobSchema)