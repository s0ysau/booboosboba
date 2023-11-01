import { Routes, Route, Navigate } from 'react-router-dom'
import { StateProvider } from '../context/StateContext'
import { categories, products, addOns, sweeetness, ice } from '../utilities/products-api'
import StartPg from './StartPg'
import NewOrderPg from './NewOrderPg'
import SingleItemDisplay from '../components/SingleItemDisplay'
import CategoryPg from './CategoryPg'
import CartPg from './CartPg'
import './App.css'

export default function App() {
  return (
    <>
      <StateProvider>
        <Routes>
          <Route path='/' element={<StartPg />} />
          <Route path='/order' element={<NewOrderPg products={products} categories={categories} />} />
          <Route path='/order/:id' element={<CartPg products={products} />} />
          {/* <Route path='/category/:params' element={<CategoryPg products={products} categories={categories} />} /> */}
          <Route path='/:params' element={<SingleItemDisplay products={products} />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </StateProvider>
    </>
  )
}
