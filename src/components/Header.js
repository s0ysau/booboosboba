import BackToMenuBtn from './BackToMenuBtn'
import CartBtn from './CartBtn'

export default function Header () {
  return (
    <div className='border-4 border-indigo-500/75'>
      <h1 className='h-16'>
        Header component
      </h1>
      <input type='search' placeholder=' Search' className='w-1/2 ml-[10px] border-solid border-2 rounded-lg' />
      <section className='flex justify-end'>
        <CartBtn className='' />
        <BackToMenuBtn className='flex-1' />
      </section>
    </div>
  )
}
