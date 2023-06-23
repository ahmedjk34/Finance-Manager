import React from "react";
import { BiHome, BiWallet, BiPurchaseTagAlt, BiHeart } from "react-icons/bi";

type Props = {
  username: String;
  profilePicture: String;
};

function Sidebar({ username, profilePicture }: Props) {
  console.log(username);
  return (
    <div className="sidebar">
      <div className="profile"></div>
      <div className="options-list">
        <li className="option">
          <BiHome className="icon" /> Dashboard
        </li>
        <li className="option">
          <BiWallet className="icon" /> Balance
        </li>
        <li className="option">
          <BiPurchaseTagAlt className="icon" />
          Cashflow
        </li>
        <li className="option">
          <BiHeart className="icon" />
          Wishlist
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
