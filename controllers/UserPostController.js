const Post = require("../models/userPostModel");

module.exports = {
  newPost: async (req, res) => {
    try {
      const newPost = new Post({
        title: req.body.title,
        text: req.body.text,
        authorId: req.user,
      });
      const savedPost = await newPost.save();
      res.json(savedPost);
    } catch (err) {
      res.status("error saving: ", err);
    }
  },

  getUserPost: async (req, res) => {
    try {
      const allPosts = await Post.find({ authorId: req.user });
      res.json(allPosts);
    } catch (err) {
      res.send("cannot get posts", err);
    }
  },

  deleteUserPost: async (req, res) => {
    try {
      const deletePost = await Post.findOneAndDelete({ authorId: req.user });
      res.json(deletePost);
    } catch (err) {
      res.send(err);
    }
  },
};
