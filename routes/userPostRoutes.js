const router = require("express").Router();
const auth = require("../middleware/auth");
const { newPost, getUserPost } = require("../controllers/UserPostController");

router.post("/", auth, newPost);

router.get("/", auth, getUserPost);

module.exports = router;
