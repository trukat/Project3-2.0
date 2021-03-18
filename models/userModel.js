const mongoose = require("mongoose");
const Post = require("./userPostModel");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    default: "",
  },
  lastName: {
    type: String,
    required: true,
    default: "",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

userSchema.pre("findOneAndDelete", async (user) => {
  try {
    await Post.deleteMany({ authorId: _id });
  } catch (err) {
    console.log(err);
  }
});

module.exports = User = mongoose.model("user", userSchema);
