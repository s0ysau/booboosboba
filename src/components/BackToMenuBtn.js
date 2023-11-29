import { Link } from 'react-router-dom'

export default function BackToMenuBtn () {
  return (
    <Link to='/order'>
      <button className='rounded-full m-3 p-2 bg-black text-white'>	&lt; Back</button>
    </Link>
  )
}
