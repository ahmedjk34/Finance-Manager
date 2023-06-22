export interface currency {
  name: String;
  symbol: String;
}
export interface User {
  username: String;
  password: String;
  profilePicture: String;
  mainCurrency: currency;
  balance: Number;
  wishList: Object;
  incomeCatagories: [String];
  expensesCatagories: [String];
  incomeGoal: Number;
  currentIncome: Number;
  currentExpenses: Number;
  expensesGoal: Number;
  spendingList: Object;
  expensesList: Object;
}
