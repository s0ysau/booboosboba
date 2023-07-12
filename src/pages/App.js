import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import StartPg from './StartPg';
import SelectionPg from './SelectionPg';
import SingleItemDisplay from '../components/SingleItemDisplay';
import CategoryPg from './CategoryPg';
import './App.css';

export default function App() {
  const [products, setProducts] = useState(null)
  const [category, setCategory] = useState(null)

  const getProducts = async () => {
    try {
      const response = await fetch(`http://localhost:8050/products/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  const getCategory = async () => {
    try {
      const response = await fetch(`http://localhost:8050/category/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json()
      setCategory(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
    getCategory()
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<StartPg />}/>
        <Route path='/menu' element={<SelectionPg products={products} category={category}/>}/>
        <Route path={`/category/:catergoryname`} element={<CategoryPg products={products}/>} />
        {/* <Route path={`/order`/> element={} />*/}
        <Route path={`/:params`} element={<SingleItemDisplay products={products}/>}/>
      </Routes>
    </>
  );
}

