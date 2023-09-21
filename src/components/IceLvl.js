import { useState } from "react"
import { ice } from "../utilities/products-api"

export default function IceLvl () {
  const [iceLevel, setIceLevel] = useState(null)

  const handleIceLevel = (id) => {
    setIceLevel((prev) => (id === prev ? null : id))
  }

  return (
    <>
      <h1>Ice Level</h1>
      {
        ice ? (
          <ul>
            {
              ice.map((item) => {
                return (
                  <div key={item.id} className="flex">
                    <label>{item.name} 
                    <input 
                    checked={item.id === iceLevel}
                    onChange={() => handleIceLevel(item.id)}
                    type="checkbox" /></label>
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