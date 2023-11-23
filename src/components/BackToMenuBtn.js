import { Link } from 'react-router-dom'

export default function BackToMenuBtn () {
  return (
    <Link to='/order'>
      <button className='rounded-full p-2 bg-black text-white'>	&lt; Back</button>
    </Link>
  )
}
