import { Link } from "react-router-dom";

export default function GridItemsDisplay ({product}) {
  
  return (
    <div className="border-2 drop-shadow-xl">
      <Link to={`/${product.params}`} key={product.id}>
        <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.name} class="w-20 h-25"/>
        <p>{product.name}</p>
        <p>${product.price}.00</p>
      </Link>
    </div>
  )
}