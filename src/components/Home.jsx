/* eslint-disable react/prop-types */
import Products from './Products';

export default function Home() {



  return (
    <div className=' flex flex-col mt-12'>
      <h1 className='text-3xl text-center'>Products provided from FakeStore API</h1>
      <Products/>
    </div>
  )
}