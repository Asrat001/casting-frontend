import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "./Reducer";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  
 
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const cart = JSON.parse(sessionStorage.getItem('cart'))
  const [state, dispatch] = useReducer(cartReducer, {cart:cart||[],isExist:Boolean});

 
  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
    
  }, [state]);
  
  return (
    <ShoppingCartContext.Provider
      value={{
        state,
        isOpen,
        dispatch,
        openCart,
        closeCart
      
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
