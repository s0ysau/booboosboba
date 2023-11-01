import { useNavigate } from "react-router-dom"

export default function StartOverBtn ({order, setOrder}){
  const navigate = useNavigate()

  const handleStartOrder =  async (_id) => {
    try {
      await fetch(`/api/order/${order._id}`,
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