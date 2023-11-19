import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "./Reducer";
import axios from "axios";
import { useQuery } from "react-query";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  
  
 
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const fetchCasts =()=>{
    return axios.get(`http://localhost:8000/api/user/alluser?search=film&limit=6&page=1&sex=male&minAge=0&maxAge=20`)
   }
   const { isLoading ,data} = useQuery("cast-data", fetchCasts);
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
        data,
        dispatch,
        openCart,
        closeCart,
        
      
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
