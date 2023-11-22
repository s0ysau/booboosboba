


export default function CartItem ({product}) {
  return (
    <div className="flex flex-nowrap justify-evenly items-center">
      <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.name} className='w-[100px] h-[100px]' />
      <h1>{product.name}</h1>
      <p>${product.price}.00</p>
    </div>
  )
}