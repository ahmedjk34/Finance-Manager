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
  spendingList: {
    type: Object,
  },
  expensesList: {
    type: Object,
  },
});

module.exports = mongoose.model("user", userSchema);
