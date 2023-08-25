import { Link } from "react-router-dom";
import SingleItemDisplay from "./SingleItemDisplay";

export default function GridItemsDisplay ({product}) {
  
  return (
    <div key={product._id} className="border-2 drop-shadow-xl">
      <Link to={`/${product.params}`}  element={<SingleItemDisplay product={product}/>}>
        <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.name} class="w-20 h-25"/>
        <p>{product.name}</p>
        <p>${product.price}.00</p>
      </Link>
    </div>
  )
}