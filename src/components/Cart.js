// Cart.js

import React from "react";
import { Link, useLocation } from "react-router-dom";

const Cart = ({ cartItems, totalPrice, removeFromCart }) => {
  const location = useLocation();

  if (cartItems.length === 0) {
    return null;
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("ko-KR", {
      style: "currency",
      currency: "KRW",
    })
      .format(amount)
      .replace("₩", "")
      .trim(); // '₩' 제거
  };

  return (
    <div className="cart">
      <h2>장바구니</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span className="item-name">{item.title}</span>
            <span className="item-price">{formatCurrency(item.price)}원</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-button"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
      <p className="total-price">총 금액: {formatCurrency(totalPrice)}원</p>
      {location.pathname !== "/checkout" && (
        <Link to="/checkout">
          <button className="checkout-button">결제하기</button>
        </Link>
      )}
    </div>
  );
};

export default Cart;
