import { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

 
export default function Products() {
  const [products, setProducts] = useState([])
  // for axios api
  useEffect(() => {
    async function getProducts(){
      try{
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data)
      }catch(err){
        console.error('ERROR:', err)
      }
    }
    getProducts()

  },[])
  return (
    <div className=' grid grid-cols-4 gap-4 px-20 py-10'>
      {products.map(product => (
        <Card key={product.id} title={product.title}price={product.price}image={product.image} />
      ))}
    </div>
  )
}
