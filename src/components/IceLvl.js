import { useState } from 'react'
import { ice } from '../utilities/products-api'

export default function IceLvl () {
  const [iceLevel, setIceLevel] = useState(null)

  const handleIceLevel = (id) => {
    setIceLevel((prev) => (id === prev ? null : id))
  }

  return (
    <section className='flex flex-col px-5'>
      <h1><b>Ice Level</b></h1>
      {
        ice
          ? (
            <ul>
              {
              ice.map((item) => {
                return (
                  <div key={item.id} className='flex'>
                    <label>{item.name} &nbsp;
                      <input
                        checked={item.id === iceLevel}
                        onChange={() => handleIceLevel(item.id)}
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
