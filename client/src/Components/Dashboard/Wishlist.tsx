import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { currencyContext } from "../../App";
import { WishList } from "../../Types";
type Props = {};

function Wishlist({}: Props) {
  const [wishlist, setWishList] = useState<[WishList] | null>(null);
  const symbol = useContext(currencyContext)?.symbol;
  useEffect(() => {
    axios
      .get("http://localhost:3000/user/wishlist")
      .then((response) => setWishList(response.data[0].wishList))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="wishlist-container">
      <h3 className="section-title">Wishlist</h3>
      <div className="wishlist">
        <div className="wishlist-info">
          <h4>Item</h4>
          <h4>Link</h4>
          <h4>Price</h4>
          <h4>Date Added</h4>
        </div>
        {wishlist?.slice(0, 4).map((listItem) => (
          <div className="list-item">
            <h4>{listItem.item}</h4>
            {/*this is used to get the name of the site , assuming the url is www.example.com*/}
            <h4 className="link-title">
              {listItem.link.split(".")[1]} <BiRightArrowAlt />
            </h4>
            <h4>
              {listItem.price.toFixed(2)}
              {symbol}
            </h4>
            <h4>{listItem.dateAdded}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
