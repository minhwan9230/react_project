// src/store.js
import { createStore } from 'redux';

// 초기 상태
const initialState = {
  cartItems: [],
  totalPrice: 0,
};

// 리듀서
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.price,
      };
    case 'REMOVE_FROM_CART':
      const updatedCart = state.cartItems.filter(item => item.id !== action.payload);
      const removedGame = state.cartItems.find(item => item.id === action.payload);
      return {
        ...state,
        cartItems: updatedCart,
        totalPrice: state.totalPrice - (removedGame ? removedGame.price : 0),
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
