const router = require("express").Router();
const auth = require("../middleware/auth");
const { newPost } = require("../controllers/UserPostController");

router.post("/", auth, newPost);

module.exports = router;
