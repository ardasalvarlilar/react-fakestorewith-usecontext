import { Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Cart from './components/Cart'
import Navbar from './components/Navbar' 
import { CartProvider } from './CartContext'

function App() {


  return (
    <CartProvider>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Cart/>} />
      </Routes>
    </CartProvider>
  )
}

export default App
