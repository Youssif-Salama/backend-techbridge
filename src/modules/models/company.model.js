import mongoose from "mongoose";

const companySchema=new mongoose.Schema({
  Img:{
    name:String,
    url:String
  },
  Banner:{
    name:String,
    url:String
  },
  Title:{
    type:String,
    required:true,
    minlength:[1,"name minimum 1 char"],
  },
  Description:String,
  Slogan:String,
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
  Address:String,
  Type:{
    type:String,
    enum:["tech","health","beauty","software","it"]
  },
  Followers:[{
      type:mongoose.Schema.Types.ObjectId,
      refPath:"makerModel"
    }],
  makerModel:{
    type:String,
    enum:["user","company"]
  },
  Employees:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    }
  ],
  Visits:[
      {
        type:mongoose.Schema.Types.ObjectId,
        refPath:"makerModel",
        no:Number
      }
    ]
},{timestamps:true});

export default mongoose.model("company",companySchema)