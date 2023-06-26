import React from "react";
import { User } from "../../Types";
import Balance from "./Balance";
import Cashflow from "./Cashflow";
import Wishlist from "./Wishlist";

type Props = {};

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="section-title">Dashboard</h1>
      <div className="main-content">
        <Balance />
        <div className="calendar"></div>
        <Cashflow></Cashflow>
        <Wishlist />
      </div>
    </div>
  );
}

export default Dashboard;
