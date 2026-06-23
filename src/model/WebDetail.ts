import mongoose from "mongoose";

const WebDetailSchema = new mongoose.Schema(
  {
    pfUser: { type: mongoose.Schema.Types.ObjectId, ref: "PFUser" },
    template: { type: mongoose.Schema.Types.ObjectId, ref: "Template" },
    active: { type: String, required: true },
    webUrl: { type: String },
    fieldsValues: {
      type: mongoose.Schema.Types.Mixed,
      default: {}
    },
  },
  { timestamps: true, collection: "web-detail" }
);

export default mongoose.models.WebDetail || mongoose.model("WebDetail", WebDetailSchema);
