import mongoose from "mongoose";

const employeeSchema= new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'company',
    required: true
  }
},{
  timestamps: true
})

export default mongoose.model("employee",employeeSchema)