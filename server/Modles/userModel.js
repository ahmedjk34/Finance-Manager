const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 3,
    maxLength: 10,
    required: true,
  },
  password: {
    type: String,
    minLength: 5,
    maxLength: 15,
    required: true,
  },

  profilePicture: {
    type: String,
    required: true,
    default:
      "https://i.pinimg.com/280x280_RS/55/96/4e/55964ebb02710d6b9ce1c26f1d857906.jpg",
  },
  mainCurrency: {
    type: Object,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
    default: 0,
  },
  wishList: {
    type: Object,
  },
  incomeCatagories: {
    type: [String],
    required: true,
    default: ["Salary", "Allowance", "Business", "Stocks", "Estate"],
  },
  expensesCatagories: {
    type: [String],
    required: true,
    default: [
      "Business",
      "Stocks",
      "Estate",
      "Food",
      "Clothes",
      "Rent",
      "Games",
    ],
  },
  incomeGoal: {
    type: Number,
    required: true,
  },
  currentIncome: Number,
  currentExpenses: Number,
  expensesGoal: {
    type: Number,
    required: true,
  },
  incomeList: {
    type: [Object],
  },
  expensesList: {
    type: [Object],
  },
});

module.exports = mongoose.model("user", userSchema);

//user example :

// const m = mongoose.model("user", userSchema);
// const username = "Ahmedgh";
// const password = "123456789";
// const mainCurrency = {
//   name: "US Dollar",
//   symbol: "$",
// };
// const balance = 1250;
// const wishList = {};
// const incomeGoal = 4000.0;
// const currentIncome = 3000.0;
// const expensesGoal = 2000.0;
// const currentExpenses = 1750.0;
// const incomeList = [
//   { amount: 41.0, category: "Salary", date: "25/6/2023" },
//   { amount: 12.94, category: "Allowance", date: "25/6/2023" },
//   { amount: 132.0, category: "Business", date: "23/6/2023" },
//   { amount: 412.0, category: "Salary", date: "22/6/2023" },
// ];
// const expensesList = [
//   { amount: 24.0, category: "Stocks", date: "21/6/2023" },
//   { amount: 123.5, category: "Clothes", date: "19/6/2023" },
//   { amount: 500.0, category: "Business", date: "19/6/2023" },
//   { amount: 30.0, category: "food", date: "18/6/2023" },
//   { amount: 42.5, category: "food", date: "20/6/2023" },
// ];
// m.create({
//   username: username,
//   password: password,
//   mainCurrency: mainCurrency,
//   balance: balance,
//   wishList: wishList,
//   incomeGoal: incomeGoal,
//   currentIncome: currentIncome,
//   expensesGoal: expensesGoal,
//   currentExpenses: currentExpenses,
//   incomeList: incomeList,
//   expensesList: expensesList,
// });
