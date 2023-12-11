
import { toast } from 'react-toastify';
import { useShoppingCart } from './CartContext';
export const cartReducer = (state, action) => {
  
    switch (action.type) {
      case "ADD_TO_CART":{
        const existingItem = state.cart.find(item => item._id === action.payload._id);
          console.log(existingItem)
        if(existingItem){
          toast.error('user alardy added',{
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
          return {...state,cart:[...state.cart]}
         
        }
        else{
          toast.success('cast added  to the cart',{
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        
          return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
         
        }
         
      }
       
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((c) => c._id !== action.payload._id),
        };
      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
          ),
        };
      default:
        return state;
    }
  };
  
  export const filterReducer = (state, action) => {
  
    switch (action.type) {
      case "ADD_FILITER":{
          return {...state,cart:[...state.cart]}
         
        
      
         
      }
       
      case "REMOVE_FILITER":
        return {
          ...state,
          cart: state.cart.filter((c) => c._id !== action.payload._id),
        };
      case "CHANGE_CART_QTY":
        return {
          ...state,
          cart: state.cart.filter((c) =>
            c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
          ),
        };
      default:
        return state;
    }
  };
  

  