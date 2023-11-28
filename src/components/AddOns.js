import { useState } from 'react'
import { addOns } from '../utilities/products-api'

export default function AddOns () {
  const [toppings, setToppings] = useState(false)

  const handleToppings = (evt) => {
    setToppings(evt.target.checked)
  }

  return (
    <section className='flex flex-col px-5'>
      <h1><b>Add Ons</b></h1>
      {
        addOns
          ? (
            <ul>
              {
              addOns.map((addOn) => {
                return (
                  <div key={addOn.id}>
                    <label className='flex '>{addOn.name} &nbsp;
                      <p>${addOn.price}</p> &nbsp;
                      <input
                        onClick={handleToppings}
                        type='checkbox'
                      />
                    </label>
                  </div>
                )
              })
            }
            </ul>
            )
          : 'Error'
      }
    </section>
  )
}
