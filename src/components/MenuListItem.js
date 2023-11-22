import { Link } from 'react-router-dom'

export default function MenuListItem ({ product }) {
  return (
    <Link
      to={`/${product.params}`}
      state={{ value: product }}
      className='h-full class border-2 drop-shadow-xl'
    >
      <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.id} className='w-20 h-25' />
      <h1><b>{product.name}</b></h1>
      <p>${product.price}.00</p>
      {/* <p>{product.tags}</p>
      <p>{product.id}</p> */}
    </Link>
  )
}
