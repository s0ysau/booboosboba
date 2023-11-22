import BackToMenuBtn from './BackToMenuBtn'
import CartBtn from './CartBtn'
import StartOverBtn from './StartOverBtn'

export default function Header () {
  return (
    <div className='flex justify-between p-5 border-4 border-indigo-500/75'>
      <input type='search' placeholder=' Search' className='w-1/2 ml-[10px] p-1 border-solid border-2 rounded-lg' />
      <section className='flex justify-end items-center'>
        <CartBtn />
      </section>
    </div>
  )
}
