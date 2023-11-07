import { useNavigate } from "react-router-dom"

export default function StartOverBtn ({cart}){
  const navigate = useNavigate()

  const handleStartOrder =  async () => {
    try {
      await fetch(`/api/order/${cart.Id}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      // setOrder(!order)
    } catch (error) {
      console.error(error)
    }
    navigate(`/`)
  }

  return (
    <>
      <button
      onClick={() => 
      handleStartOrder()
      }
      >Start Over</button>
    </>
  )
}