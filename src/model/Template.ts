import mongoose from "mongoose";

const TemplateSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    premiumOrNot: { type: String },
    active: { type: String, required: true },
  },
  { timestamps: true ,  collection: "template"}
);

export default mongoose.models.Template || mongoose.model("Template", TemplateSchema);
