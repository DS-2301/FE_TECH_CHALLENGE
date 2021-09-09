import { addItemToStore, removeItemFromStore } from "./utils/reducerFunctions";

const GET_CART = "GET_CART";
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

//In the future this could be used to get saved cart for the particular user, for now just set initial state of the cart
export const getCart = () => {
  return {
    type: GET_CART,
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item,
  };
};

export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    itemId,
  };
};

const reducer = (state = { items: {}, total: 0 }, action) => {
  switch (action.type) {
    case GET_CART:
      return state;
    case ADD_ITEM:
      return addItemToStore(state, action.item);
    case REMOVE_ITEM:
      return removeItemFromStore(state, action.itemId);
    default:
      return state;
  }
};

export default reducer;
