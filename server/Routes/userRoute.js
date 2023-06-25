const {
  fetchUser,
  fetchBalance,
  fetchIncome,
  fetchExpenses,
} = require("../Controllers/userController");

const router = require("express").Router();
router.get("/", fetchUser);
router.get("/balance", fetchBalance);
router.get("/income", fetchIncome);
router.get("/expenses", fetchExpenses);
module.exports = router;
