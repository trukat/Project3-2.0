const router = require("express").Router();
const auth = require("../middleware/auth");
const { newPost } = require("../controllers/UserPostController");

router.get("/", newPost);

module.exports = router;
