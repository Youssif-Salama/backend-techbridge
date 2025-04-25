import mongoose, { Schema } from "mongoose";

const userSchema=new mongoose.Schema({
  Img:{
    name:String,
    url:String
  },
  Fname:{
    type:String,
    required:true,
    minlength:[3,"name minimum 3 char"],
  },
  Lname:String,
  Email:{
    type:String,
    required:true,
    unique:[true,"this email is already exist"]
  },
  Phone:{
    type:Number,
    unique:[true,"this phone is already exist"]
  },
  Password:{
    type:String,
    required:true,
    mathces:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  },
  skills: { type: [String], default: [] },
  Address:{
    country:String,
    city:String,
    description:String
  },
  Experience:Number,
  Languages:[String],
  Gender:{
    type:String,
    enum:["male","female"]
  },
  Verified:{
    type:Boolean,
    default:false
  }
},{timestamps:true})

export default mongoose.model("user",userSchema)