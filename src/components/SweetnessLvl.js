import { useState } from 'react'
import { sweetness } from '../utilities/products-api'

export default function SweetnessLvl () {
  const [sweetLevel, setSweetLevel] = useState(null)

  const handleSweetLevel = (id) => {
    setSweetLevel((prev) => (id === prev ? null : id))
  }

  return (
    <section className='flex flex-col px-5'>
      <h1><b>Sweetness Level</b></h1>
      {
        sweetness
          ? (
            <ul>
              {
              sweetness.map((sweet) => {
                return (
                  <div key={sweet.id} className='flex justify-items-around'>
                    <label>{sweet.name} &nbsp;
                      <input
                        checked={sweet.id === sweetLevel}
                        onChange={() => handleSweetLevel(sweet.id)}
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
