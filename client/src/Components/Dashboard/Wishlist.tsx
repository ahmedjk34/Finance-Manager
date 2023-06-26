import React from "react";

type Props = {};

function Wishlist({}: Props) {
  return (
    <div className="wishlist-container">
      <h3 className="section-title">Wishlist</h3>
      <div className="wishlist">
        <div className="wishlist-info">
          <h5>Item</h5>
          <h5>Link</h5>
          <h5>Price</h5>
          <h5>Date Added</h5>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
