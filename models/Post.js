const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  username: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    comments: [commentSchema] // Mảng các comment
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
