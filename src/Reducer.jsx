import React from "react";

export const initialState = {
  basket: [],
};

function Reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      break;
    default:
      return state;
  }
}

export default Reducer;
