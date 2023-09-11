import { Link } from 'react-router-dom'

export default function BackToMenuBtn () {
  return (
    <section>
      <Link to='/order/new'>
        <button className='rounded-full mx-2'>Back</button>
      </Link>
    </section>
  )
}
