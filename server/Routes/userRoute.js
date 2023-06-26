const {
  fetchUser,
  fetchBalance,
  fetchIncome,
  fetchExpenses,
  fetchWishList,
} = require("../Controllers/userController");

const router = require("express").Router();
router.get("/", fetchUser);
router.get("/balance", fetchBalance);
router.get("/income", fetchIncome);
router.get("/expenses", fetchExpenses);
router.get("/wishlist", fetchWishList);
module.exports = router;
