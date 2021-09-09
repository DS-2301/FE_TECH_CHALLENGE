const GET_PRODUCTS = "GET_PRODUCTS";
const SET_FETCHING_STATUS = "SET_FETCHING_STATUS";

export const getProducts = (products) => {
  return {
    type: GET_PRODUCTS,
    products,
  };
};

export const setFetchingStatus = (isFetching) => ({
  type: SET_FETCHING_STATUS,
  isFetching,
});

const reducer = (state = { isFetching: true }, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products;
    case SET_FETCHING_STATUS:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export default reducer;
