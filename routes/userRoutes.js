const router = require("express").Router();
const { test } = require("../controllers/UserController");

router.get("/", test);

module.exports = router;
