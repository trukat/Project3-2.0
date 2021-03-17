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
      res.send(savedPost);
    } catch (err) {
      res.send("error saving: ", err);
    }
  },
};
