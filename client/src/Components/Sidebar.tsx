import React from "react";
import { BiHome, BiWallet, BiPurchaseTagAlt, BiHeart } from "react-icons/bi";

type Props = {
  username: String;
  profilePicture: String;
};

function Sidebar({ username, profilePicture }: Props) {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={profilePicture}></img>
        <h3>{username}</h3>
      </div>
      <div className="options-list">
        <li className="option">
          <BiHome className="icon" size="2.1rem" /> Dashboard
        </li>
        <li className="option">
          <BiWallet className="icon" size="2.1rem" /> Balance
        </li>
        <li className="option">
          <BiPurchaseTagAlt className="icon" size="2.1rem" />
          Cashflow
        </li>
        <li className="option">
          <BiHeart className="icon" size="2.1rem" />
          Wishlist
        </li>
      </div>
    </div>
  );
}

export default Sidebar;
