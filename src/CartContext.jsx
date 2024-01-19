/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

const CartContext = createContext()


export function CartProvider({children}){

  const [items, setItems] = useState([])

  function addItemToCart(name,price,image){
    setItems(prevState => [...prevState, {name,price,image}])
  }

  return (
    <CartContext.Provider value={{items,addItemToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext