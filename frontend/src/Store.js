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
    return{...state, cart :{...state.cart, cartItems:[...state.cart.cartItems]}}
    default:
        return state;
    }
}
}
export function Storeprovider(props){
   const [state, dispatch] = useReducer(reducer, intialState);
   const value ={state,dispatch}
   return <Store.provider value ={value}>{props.children}</Store.provider>
}