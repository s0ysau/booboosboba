import { Link } from "react-router-dom"

export default function StartPg () {
  return (
    <>
      <Link to={'/menu'}>
        <h1>
          Start Page
        </h1>
      </Link>
    </>
  )
}