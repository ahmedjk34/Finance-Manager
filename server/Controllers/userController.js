const mongoose = require("mongoose");
const userModel = require("../Modles/userModel");
exports.fetchUser = async function (req, res) {
  try {
    const user = await userModel.find({});
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
exports.fetchBalance = async function (req, res) {
  try {
    const balance = await userModel
      .find({})
      .select("balance mainCurrency.symbol");
    res.json(balance);
  } catch (error) {
    console.log(error);
  }
};
exports.fetchIncome = async function (req, res) {
  try {
    const incomeInfo = await userModel
      .find({})
      .select("incomeGoal currentIncome incomeList");
    res.json(incomeInfo);
  } catch (error) {
    console.log(error);
  }
};
exports.fetchExpenses = async function (req, res) {
  try {
    const expensesInfo = await userModel
      .find({})
      .select("expensesGoal currentExpenses expensesList");
    res.json(expensesInfo);
  } catch (error) {
    console.log(error);
  }
};
exports.fetchWishList = async function (req, res) {
  try {
    const wishList = await userModel.find({}).select("wishList");
    res.json(wishList);
  } catch (error) {
    console.log(error);
  }
};
