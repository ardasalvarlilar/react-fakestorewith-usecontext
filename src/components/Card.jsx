/* eslint-disable react/prop-types */
import { FaCartPlus } from "react-icons/fa";
import { useContext } from 'react';
import CartContext from '../CartContext';


export default function Card({title, price,image}) {

  const {addItemToCart} = useContext(CartContext)

  return (
      <div className=' bg-amber-500 flex flex-col gap-4 items-center'>
        <h4>{title}</h4>
        <div className=' w-40'>
          <img src={image} alt="" className=' w-full' />
        </div>
        <div className=' flex justify-between items-center w-full px-12'>
          <p>${price}</p>
          <p>
            <FaCartPlus 
              onClick={() => addItemToCart(title,price,image)}
              size={20} 
              className=' cursor-pointer' 
            />
          </p>
        </div>
      </div>
  )
}
