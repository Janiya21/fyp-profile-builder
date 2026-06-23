import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  email: string;
  name?: string;
  image?: string;
  pfUser?: mongoose.Schema.Types.ObjectId;
  progressStep: "signedIn" | "profileSaved" | "templateSelected" | "websiteFilled";
}


const UserSchema: Schema = new mongoose.Schema<IUser>(
  {
    email: { type: String, unique: true, required: true },
    name: String,
    image: String,
    pfUser: { type: mongoose.Schema.Types.ObjectId, ref: "PFUser" },
    progressStep: {
      type: String,
      enum: ["signedIn", "profileSaved", "templateSelected", "websiteFilled"],
      default: "signedIn",
    },
  },
  { collection: "users" } 
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
