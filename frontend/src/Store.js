import { createContext,useReducer } from "react";

const intialState ={
    cart : {
        cartItems: [],
    },
}
export const Store= createContext();
function reducer(state,action){
    switch(action.type){
    case'CART_ADD_ITEM':
    //add to cart

     const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    default:
        return state;
    }
}

export function StoreProvider(props){
   const [state, dispatch] = useReducer(reducer, intialState);
   const value ={state,dispatch}
   return <Store.Provider value ={value}>{props.children}</Store.Provider>
}