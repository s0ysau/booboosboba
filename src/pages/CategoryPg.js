import { useParams } from "react-router-dom"
import ItemsDisplay from "../components/ItemsDisplay"

export default function CategoryPg ({products, category}) {
  const {name} = useParams()

  


  return (
    <>
      <h1>{name}</h1>
      {
        products.tags ? 
        (
          <ul>
            {
              products.tags.filter(tag => tag == name).map((product) => {
                return (
                  <ItemsDisplay product={product}/>
                )
              })
            }
          </ul>
        ) : null 
      }
    </>
  )
}