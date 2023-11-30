import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { cartReducer } from "./Reducer";
import axios from "axios";
import { useQuery } from "react-query";
import { fetchCasts,fetchCountedata ,fetchCountorders} from "../apiRequistes/fetchCasts";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  
  
 
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
 
   const { isLoading:lodingCast ,data:CastData} = useQuery("cast-data", fetchCasts);
   const { isLoading:lodingCountData ,data:CauntData} = useQuery("count-data", fetchCountedata);
   const { isLoading:lodingCountOrder ,data:OrderCount} = useQuery("count-order",fetchCountorders);
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
        CastData,
        lodingCast ,
        lodingCountData,
        CauntData,
        OrderCount,
        dispatch,
        openCart,
        closeCart,
        
      
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
