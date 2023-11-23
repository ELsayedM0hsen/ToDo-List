import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    task: [
      {
        type: Schema.Types.ObjectId,
        ref: "tasks",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
