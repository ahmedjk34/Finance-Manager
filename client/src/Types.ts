export interface Currency {
  name: String;
  symbol: String;
}
export interface List {
  amount: number;
  category: String;
  date: Date;
}
export interface User {
  username: String;
  password: String;
  profilePicture: String;
  mainCurrency: Currency;
  balance: Number;
  wishList: Object;
  incomeCatagories: [String];
  expensesCatagories: [String];
  incomeGoal: Number;
  currentIncome: Number;
  currentExpenses: Number;
  expensesGoal: Number;
  spendingList: List;
  expensesList: List;
}
