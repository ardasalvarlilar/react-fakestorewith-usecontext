import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import CartContext from '../CartContext';

export default function Navbar() {
  const {items} = useContext(CartContext)

  return (
    <nav className=' px-56 mx-auto py-4 bg-purple-300 flex justify-between items-center'>
      <Link to='/'><h3 className=' text-3xl text-slate-800'>FakeStore</h3></Link>
      
      <div>
        <Link to='/checkout' className='flex'>
        <FaShoppingCart 
          size={30} 
          color='white' 
          className=' cursor-pointer' 
        />
        <span className='-mt-3'>{items.length}</span>
        </Link>
      </div>
    </nav>
  )
}
