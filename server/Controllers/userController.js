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
exports.fetchExpensesGraphData = async function (req, res) {
  try {
    const expensesInfo = await userModel.find({}).select("expensesList");
    const expensesList = expensesInfo[0].expensesList;
    const graphData = {};
    //run through each element in the expenses list -> categories :
    //if it doesn't exist , create a new property in the object , default value of 1 ,
    // if it does , change the value to => prev + 1
    expensesList.forEach((item) => {
      if (`${item.category}` in graphData) {
        graphData[`${item.category}`] = graphData[`${item.category}`] + 1;
      } else {
        graphData[`${item.category}`] = 1;
      }
      console.log(graphData);
    });
    res.json(graphData);
  } catch (error) {
    console.log(error);
  }
};
exports.fetchMonthlyGoal = async function (req, res) {
  try {
    const monthlyGoalInfo = await userModel
      .find({})
      .select(
        "monthlyGoal expensesGoal currentExpenses incomeGoal currentIncome"
      );
    res.json(monthlyGoalInfo);
  } catch (error) {
    console.log(error);
  }
};
