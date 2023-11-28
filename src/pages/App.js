import { Routes, Route, Navigate } from 'react-router-dom'
import { ShopContextProvider } from '../context/StateContext'
import { products } from '../utilities/products-api'
import StartPg from './StartPg'
import NewOrderPg from './NewOrderPg'
import SingleItemDisplay from '../components/SingleItemDisplay'
import CartPg from './CartPg'
import OrderCompletePg from './OrderCompletePg'
import Footer from '../components/Footer'

export default function App() {
  return (
    <ShopContextProvider>
      <div>
        <Routes>
          <Route path='/' element={<StartPg />} />
          <Route path='/order' element={<NewOrderPg products={products} />} />
          <Route path='/cart' element={<CartPg products={products} />} />
          <Route path='/:params' element={<SingleItemDisplay products={products} />} />
          <Route path='/*' element={<Navigate to='/' />} />
          <Route path='/complete' element={<OrderCompletePg />} />
        </Routes>
        <Footer />
      </div>
    </ShopContextProvider>
  )
}
