const express = require("express");
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  addComment
} = require("../controllers/postController");
const postRouter = express.Router();

postRouter.post("/", createPost);
postRouter.get("/", getAllPosts);
postRouter.get("/:postId", getPostById);
postRouter.put("/:postId", updatePost);
postRouter.delete("/:postId", deletePost);
postRouter.put("/:postId/comments", addComment);

module.exports = postRouter;
