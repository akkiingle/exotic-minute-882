import React from 'react';
import { createContext,useState} from 'react';


export const CartContext= createContext();

const CartContextProvider = ({children}) => {
  const [cartData,setCartData] = useState([])
  return <CartContext.Provider value={{cartData,setCartData}}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
