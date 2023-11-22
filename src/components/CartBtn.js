import { Link } from 'react-router-dom'
import { CgShoppingCart } from 'react-icons/cg'

export default function CartBtn ({ cart }) {
  return (
    <>
      <Link to='/cart'>
        <CgShoppingCart size={30} />  
      </Link>
    </>
  )
}
