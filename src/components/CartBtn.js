import { Link } from 'react-router-dom'

export default function CartBtn () {
  return (
    <>
      <Link to='/cart'>
        <button>Cart</button>
      </Link>
    </>
  )
}
