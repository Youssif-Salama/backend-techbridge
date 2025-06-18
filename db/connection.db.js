import mongoose from "mongoose";

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URI_REMOTE);
};

export default connectDB;
