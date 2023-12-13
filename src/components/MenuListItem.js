import { Link } from 'react-router-dom'

export default function MenuListItem ({ product }) {
  return (
    <Link
      to={`/${product.params}`}
      state={{ value: product }}
      className='flex flex-col justify-center items-center w-80 p-3 border-2 rounded-2xl bg-white'
    >
      <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.id} className='w-[300px] h-[440px] pb-3' />
      <h1><b>{product.name}</b></h1>
      <p>${product.price}.00</p>
    </Link>
  )
}
