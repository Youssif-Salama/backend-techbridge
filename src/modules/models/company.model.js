import mongoose from "mongoose";

const companySchema=new mongoose.Schema({
  Img:{
    name:String,
    url:String
  },
  banner:{
    name:String,
    url:String
  },
  Title:{
    type:String,
    required:true,
    minlength:[1,"name minimum 1 char"],
  },
  Description:String,
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
  Address:{
    country:String,
    city:String,
    description:String
  },
  Type:{
    type:String,
    enum:["tech","health","beauty","software","it"]
  },
  Employees:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
  ]
},{timestamps:true});

export default mongoose.model("company",companySchema)