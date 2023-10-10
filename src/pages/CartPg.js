import { useLocation } from 'react-router-dom'
import BackToMenuBtn from '../components/BackToMenuBtn'

export default function CartPg ({ cart, products, handleChangeQty }) {
  return (
    <>
      <BackToMenuBtn />
      <h1>Cart Page</h1>

    </>
  )
}
