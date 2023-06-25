const { fetchUser, fetchBalance } = require("../Controllers/userController");

const router = require("express").Router();
router.get("/", fetchUser);
router.get("/balance", fetchBalance);
module.exports = router;
