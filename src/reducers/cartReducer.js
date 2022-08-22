import { data } from "../data";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE": {
      return {
        ...state,
        input: action.payload,
        products: data.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    }

    case "CLEAR_INPUT": {
      return {
        ...state,
        input: "",
        products: data,
      };
    }

    case "SHOW_CARTBAR": {
      return { ...state, openCartBar: !state.openCartBar };
    }

    case "SORT_ASC": {
      return {
        ...state,
        products: [...state.products].sort((a, b) => {
          return a.price - b.price;
        }),
      };
    }

    case "SORT_DESC": {
      return {
        ...state,
        products: [...state.products].sort((a, b) => {
          return b.price - a.price;
        }),
      };
    }

    case "INCLUDE_OUTOFSTOCK": {
      return { ...state, isChecked: !state.isChecked };
    }

    case "FAST_DELIVERY": {
      return { ...state, isFastChecked: !state.isFastChecked };
    }

    case "CLEAR_FILTERS": {
      return {
        ...state,
        products: data,
        isChecked: false,
        isFastChecked: false,
        input: "",
      };
    }

    case "ADD_CART": {
      return {
        ...state,
        cartProducts: [...state.cartProducts, { ...action.payload, qty: 1 }],
      };
    }

    case "DELETE_SELECTED_CART": {
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (p) => p.id !== action.payload.id
        ),
      };
    }

    case "ADD_QUANTITY": {
      return {
        ...state,
        cartProducts: state.cartProducts.filter((p) =>
          p.id === action.payload ? (p.qty = p.qty + 1) : p.qty
        ),
      };
    }

    case "DEC_QUANTITY": {
      return {
        ...state,
        cartProducts: state.cartProducts.filter((p) =>
          p.id === action.payload
            ? p.qty > 1
              ? (p.qty = p.qty - 1)
              : 1
            : p.qty
        ),
      };
    }

    case "TOTAL_AMOUNT": {
      return {
        ...state,
        totalAmount: state.cartProducts.reduce(
          (prev, curr) => prev + curr.qty * curr.price,
          0
        ),
      };
    }

    default:
      return state;
  }
};
