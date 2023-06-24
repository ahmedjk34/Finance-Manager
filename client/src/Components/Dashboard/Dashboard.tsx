import React from "react";
import { User } from "../../Types";
import Balance from "./Balance";

type Props = {
  user: User | null;
};

function Dashboard({ user }: Props) {
  //@ts-ignore
  const { balance, mainCurrency } = user;
  return (
    <div className="dashboard">
      <h1 className="section-title">Dashboard</h1>
      <div className="main-content">
        <Balance balance={balance} symbol={mainCurrency.symbol} />
        <div className="calendar"></div>
        <div className="cashflow"></div>
        <div className="wishlist"></div>
      </div>
    </div>
  );
}

export default Dashboard;
