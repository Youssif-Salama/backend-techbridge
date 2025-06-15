import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    comment: String,
    comments: [
      {
        comment: String,
        makerId: {
          type: mongoose.Schema.Types.ObjectId,
          refPath: "makerModel",
        },
        makerModel: {
          type: String,
          required: true,
          enum: ["user", "company"],
        },
      },
    ],
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
    makerId: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "makerModel",
    },
    makerModel: {
      type: String,
      required: true,
      enum: ["user", "company"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("comment", commentSchema);
