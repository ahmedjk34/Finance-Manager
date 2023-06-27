import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { currencyContext } from "../../App";

type Props = {};

function Balance() {
  const [balance, setBalance] = useState<Number>(0);
  const symbol = useContext(currencyContext)?.symbol;
  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/user/balance")
      .then((response) => {
        setBalance(response.data[0].balance);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <h3 className="section-title">Balance</h3>
      <div className="balance">
        <h1>
          {balance.toFixed(2)}
          {symbol}
        </h1>

        <h4 onClick={() => navigation("/balance")}>More Info &gt;</h4>
      </div>
    </div>
  );
}

export default Balance;
