const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String, // Or you can reference a User model with `type: mongoose.Schema.Types.ObjectId, ref: 'User'`
      required: true,
    },
    tags: [String], // Optional: array of tags
    likes: {
      type: Number,
      default: 0,
    },
    // You can add more fields like comments, images, etc.
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

module.exports = mongoose.model("Post", postSchema);
