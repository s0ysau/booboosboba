import { useEffect, useState, useRef } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import StartPg from './StartPg'
import NewOrderPg from './NewOrderPg'
import SingleItemDisplay from '../components/SingleItemDisplay'
import CategoryPg from './CategoryPg'
import CartPg from './CartPg'
import './App.css'

export default function App () {
  const [products, setProducts] = useState(null)
  const [categories, setCategories] = useState(null)

  const getProducts = async () => {
    try {
      const response = await fetch('/api/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  const getCategories = async () => {
    try {
      const response = await fetch('/api/category')
      const data = await response.json()
      setCategories(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProducts()
    getCategories()
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<StartPg />} />
        <Route path='/order/new' element={<NewOrderPg products={products} categories={categories} />} />
        <Route path='/cart' element={<CartPg />} />
        <Route path='/category/:params' element={<CategoryPg categories={categories} />} />
        <Route path='/:params' element={<SingleItemDisplay products={products} />} />
        <Route path='/*' element={<Navigate to='/order/new' />} />
      </Routes>
    </>
  )
}
