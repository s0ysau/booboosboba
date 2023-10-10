import { Link } from "react-router-dom";

export default function MenuListItem({ product }) {
  return (
    <Link 
    to={`/${product.params}`}
    state={{ value: product }}
    // handleAddToOrder={handleAddToOrder}
    className='h-full class border-2 drop-shadow-xl'>
      <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.id} className='w-20 h-25' />
      <p>{product.name}</p>
      <p>${product.price}.00</p>
      <p>{product.tags}</p>
      <p>{product.id}</p>
    </Link>
  )
}