import mongoose from "mongoose";

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
  Description:String,
  Slogna:String,
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
    type:String
  },
  Slogan:String,
  Experience:Number,
  Followers:[{
    type:mongoose.Schema.Types.ObjectId,
    refPath:"makerModel"
  }],
  UserMeta:{
    ProfileViews:Number,
    PostsViews:Number,
    SearchViews:Number
  },
  makerModel:{
    type:String,
    enum:["user","company"]
  },
  Languages:{type: [String], default: []},
  Gender:{
    type:String,
    enum:["male","female"]
  },
  Verified:{
    type:Boolean,
    default:false
  }
  ,Visits:[
    {
      type:mongoose.Schema.Types.ObjectId,
      refPath:"makerModel",
      no:Number
    }
  ]
},{timestamps:true})

export default mongoose.model("user",userSchema)