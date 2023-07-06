import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import StartPg from './StartPg';
import SelectionPg from './SelectionPg';
import './App.css';
import SingleItemDisplay from '../components/SingleItemDisplay';

export default function App() {
  const [products, setProducts] = useState(null)

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

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<StartPg />}/>
        <Route path='/order' element={<SelectionPg products={products}/>}/>
        {/* <Route path={`/:name`/> */}
        <Route path={`/:params`} element={<SingleItemDisplay products={products}/>}/>
      </Routes>
    </>
  );
}

