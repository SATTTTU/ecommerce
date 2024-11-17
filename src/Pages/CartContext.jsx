import React, { createContext, useReducer } from 'react'
let cartReducer = (state, action) => {
    switch (action.type) {
      case "addtocart":
        
        return { ...state, cartItems: [...state.cartItems, action.payload] };
        break;
        case "removefromcart":
          return{...state ,cartItems: state.cartItems.filter((item)=>item.id !==action.payload.id)}
    }
}
export let CartContext=createContext()
let CartProvider=({children})=>{
    let [state, dispatch] = useReducer(cartReducer, { cartItems: [] });
    return(<>
    <CartContext.Provider value={{state,dispatch}}>
        {children}
    </CartContext.Provider>
    </>)
}

export default CartProvider