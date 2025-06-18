import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: String,
    description: {
      type: String,
      required: true,
    },
    hashtags: String,
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    files: [
      {
        name: { type: String, required: true },
        url: { type: String, required: true },
        type: { type: String, required: true },
      },
    ],
    makerId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "makerModel",
      required: true,
    },
    makerModel: {
      type: String,
      required: true,
      enum: ["user", "company"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("post", postSchema);
