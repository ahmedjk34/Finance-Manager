import axios from "axios";
import { CashflowList } from "../../Types";
import { BiMoney, BiCalendarAlt } from "react-icons/bi";

import React, { useContext, useEffect, useState } from "react";
import { currencyContext } from "../../App";
import Chart from "./Chart";

type Props = {};

function Cashflow({}: Props) {
  const [incomeList, setIncomeList] = useState<[CashflowList] | null>(null);
  const [expensesList, setExpensesList] = useState<[CashflowList] | null>(null);
  const symbol = useContext(currencyContext)?.symbol;
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/income")
      .then((response) => setIncomeList(response.data[0].incomeList))
      .catch((e) => console.log(e));
    axios
      .get("http://localhost:3000/user/expenses")
      .then((response) => setExpensesList(response.data[0].expensesList))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="cashflow-container">
      <h3 className="section-title">Cashflow</h3>
      <div className="cashflow">
        <div className="income">
          <h4>Income</h4>
          {incomeList?.slice(0, 4).map((item, index) => (
            <div className="cashflow-details" key={"income" + index}>
              <h1>
                {item.amount.toFixed(2)}
                {symbol}
              </h1>
              <div>
                <h3>
                  <BiMoney />
                  {item.category}
                </h3>
                <h3>
                  <>
                    <BiCalendarAlt />
                    {item.date}
                  </>
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="expenses">
          <h4>Expenses</h4>
          <div>
            <div>
              {expensesList?.slice(0, 4).map((item, index) => (
                <div className="cashflow-details" key={"expenses" + index}>
                  <h1>
                    {item.amount.toFixed(2)}
                    {symbol}
                  </h1>
                  <div>
                    <h3>
                      <BiMoney />
                      {item.category}
                    </h3>
                    <h3>
                      <>
                        <BiCalendarAlt />
                        {item.date}
                      </>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <Chart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cashflow;
