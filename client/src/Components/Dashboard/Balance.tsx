import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

function Balance() {
  const [balance, setBalance] = useState<Number>(0);
  const [symbol, setSymbol] = useState<String>("$");
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/balance")
      .then((response) => {
        setBalance(response.data[0].balance);
        setSymbol(response.data[0].mainCurrency.symbol);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <h3>Balance</h3>
      <div className="balance">
        <h1>
          {balance}.00{symbol}
        </h1>

        <h4>More Info &gt;</h4>
      </div>
    </div>
  );
}

export default Balance;
