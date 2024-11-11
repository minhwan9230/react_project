// src/actions.js
export const addToCart = (game) => ({
  type: 'ADD_TO_CART',
  payload: game,
});

export const removeFromCart = (gameId) => ({
  type: 'REMOVE_FROM_CART',
  payload: gameId,
});
