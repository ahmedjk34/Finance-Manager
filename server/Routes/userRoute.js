const { fetchUser } = require("../Controllers/userController");

const router = require("express").Router();
router.get("/", fetchUser);
module.exports = router;
