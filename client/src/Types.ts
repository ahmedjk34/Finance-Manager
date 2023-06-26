export interface Currency {
  name: String;
  symbol: String;
}
export interface CashflowList {
  amount: number;
  category: String;
  date: Date;
}
export interface WishList {
  item: String;
  Link: String;
  price: Number;
  dateAdded: String;
}
export interface User {
  username: String;
  password: String;
  profilePicture: String;
  mainCurrency: Currency;
  balance: Number;
  wishList: [WishList];
  incomeCatagories: [String];
  expensesCatagories: [String];
  incomeGoal: Number;
  currentIncome: Number;
  currentExpenses: Number;
  expensesGoal: Number;
  spendingList: CashflowList;
  expensesList: CashflowList;
}
