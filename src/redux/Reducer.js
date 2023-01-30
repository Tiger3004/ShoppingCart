import {
  FETCH_ERRORS,
  FETCH_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../redux/actionType";

const initialState = {
  items: [],
  cart: [],
  error: "",
  qties: "",
};

const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, items: action.payload };
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case FETCH_ERRORS:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default ProductsReducer;
