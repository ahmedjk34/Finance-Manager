const {
  fetchUser,
  fetchBalance,
  fetchIncome,
  fetchExpenses,
  fetchWishList,
  fetchExpensesGraphData,
  fetchMonthlyGoal,
} = require("../Controllers/userController");

const router = require("express").Router();
router.get("/", fetchUser);
router.get("/balance", fetchBalance);
router.get("/income", fetchIncome);
router.get("/expenses", fetchExpenses);
router.get("/expenses/graphData", fetchExpensesGraphData);
router.get("/wishlist", fetchWishList);
router.get("/monthly-goal", fetchMonthlyGoal);
module.exports = router;
