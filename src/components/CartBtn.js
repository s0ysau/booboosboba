import { Link } from 'react-router-dom'


export default function CartBtn ({cart}) {
  

  return (
    <>
      <Link to={`/order/`}>
        <button className='mx-2'>Cart</button>
      </Link>
    </>
  )
}
