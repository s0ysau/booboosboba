


export default function CartItem ({product}) {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.name} className='w-[25px] h-[30px]' />
      <h1>{product.name}</h1>
    </div>
  )
}