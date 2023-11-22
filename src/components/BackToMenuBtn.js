import { Link } from 'react-router-dom'

export default function BackToMenuBtn () {
  return (
    <Link to='/order'>
      <button className='rounded-full mx-2'>Back</button>
    </Link>
  )
}
