// CartIcon.js

import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function CartIcon() {
  return (
    <div className="cart-icon">
      <Link to="/cart">
				<FaShoppingCart size={30} color="#c7d5e0" />
				<span style={{fontSize: "30px"}}> 장바구니</span>
      </Link>
    </div>
  );
}

export default CartIcon;
