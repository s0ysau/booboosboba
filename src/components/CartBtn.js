import { Link } from 'react-router-dom'

export default function CartBtn () {
  return (
    <>
      <Link to='/order/cart'>
        <button className='mx-2'>Cart</button>
      </Link>
    </>
  )
}
