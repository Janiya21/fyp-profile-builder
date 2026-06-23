import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    hometown: { type: String, required: true },
    jobTitle: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    subscription: {
      type: String,
      enum: ["yearly", "halfYear", "quarter", "month", "subscribed", "none"],
      default: "none",
    },
  },
  { timestamps: true, collection: "pf-user" }
);

export default mongoose.models.PFUser || mongoose.model("PFUser", UserSchema);
