import { useParams } from "react-router-dom"
import GridItemsDisplay from "../components/GridItemsDisplay"

export default function CategoryPg ({products, category}) {
  const {name} = useParams()



  return (
    <>
      <h1>{name}</h1>
      {/* {
        tags ? 
        (
          <ul>
            {
              tags.filter(tags => tags.includes({name})).map((product) => {
                return (
                  // <GridItemsDisplay product={product}/>
                )
              })
            }
          </ul>
        ) : null 
      } */}
    </>
  )
}