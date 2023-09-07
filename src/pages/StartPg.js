import { Link } from 'react-router-dom'

export default function StartPg () {
  return (
    <>
      <h1>Welcome to Booboo's Boba!</h1>
      <Link to='/order/new'>
        <button>Click here to start your order</button>
      </Link>
    </>
  )
}
