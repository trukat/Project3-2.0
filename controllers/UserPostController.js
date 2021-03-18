const Post = require("../models/userPostModel");

module.exports = {
  newPost: async (req, res) => {
    console.log("hi");
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
      console.log(allPosts);
      res.json(allPosts);
    } catch (err) {
      res.send("cannot get posts", err);
    }
  },
};
