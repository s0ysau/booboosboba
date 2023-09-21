import { useState } from "react"
import { addOns } from "../utilities/products-api"

export default function AddOns () {
  const [toppings, setToppings] = useState(false)

  const handleToppings = (evt) => {
    setToppings(evt.target.checked)
  }

  return (
    <>
      <h1>Add Ons</h1>
      {
        addOns ? (
          <ul>
            {
              addOns.map((addOn) => {
                return (
                  <div key={addOn.id} className="flex">
                      <p>{addOn.name}</p>
                      <p>{addOn.price}</p>
                      <input 
                      onClick={handleToppings}
                      type="checkbox" />
                  </div>
                )
              })
            }
          </ul>
        ) :
        "Error"
      }
    </>
  )
}