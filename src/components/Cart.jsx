import { useContext } from 'react'
import CartContext from '../CartContext'
export default function Cart() {

  const {items} = useContext(CartContext)
  return (
    <div>
      {items.map((item,index) => (
        <div key={index}>
          <h4>{item.title}</h4>

          <div className=' w-40'>
            <img src={item.image} alt={item.title} className='w-full' />
          </div>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  )
}
