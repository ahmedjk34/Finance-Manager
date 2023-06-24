import React from "react";

type Props = {
  balance: Number;
  symbol: String;
};

function Balance({ balance, symbol }: Props) {
  return (
    <div>
      <h3>Balance</h3>
      <div className="balance">
        <h1>
          {balance}.00
          {symbol}
        </h1>
        <h4>More Info &gt;</h4>
      </div>
    </div>
  );
}

export default Balance;
