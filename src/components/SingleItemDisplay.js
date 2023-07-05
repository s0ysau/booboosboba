
export default function SingleItemDisplay ({product}) {
  
  return (
    <div class="border-2">
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  )
}