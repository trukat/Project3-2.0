const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  newPost,
  getUserPost,
  deleteUserPost,
} = require("../controllers/UserPostController");

router.post("/", auth, newPost);

router.get("/", auth, getUserPost);

router.delete("/", auth, deleteUserPost);

module.exports = router;
