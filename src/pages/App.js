import './App.css';
import { Routes, Route } from 'react-router-dom'
import StartPg from './StartPg';
import SelectionPg from './SelectionPg';
import { useEffect, useState } from 'react';

export default function App() {
  const [products, setProducts] = useState(null)

  const getproducts = async () => {
    try {
      const response = await fetch (`http://localhost:8050/products`)
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect = (() => {
    getproducts()
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<StartPg />}/>
        <Route path='/order' element={<SelectionPg products={products}/>}/>
      </Routes>
    </>
  );
}

