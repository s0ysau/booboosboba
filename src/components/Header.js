import CartBtn from './CartBtn'

export default function Header () {
  return (
    <div className='border-4 border-indigo-500/75'>
      <h1 className='h-16'>
        Header component
      </h1>
      <CartBtn />
    </div>
  )
}
