import { useParams } from 'react-router-dom'
import GridItemsDisplay from '../components/GridItemsDisplay'

export default function CategoryPg ({ products, category }) {
  const { params } = useParams()
  

  return (
    <>
      <h1>{params}</h1>
      {
        products ?
        // (
        //   <ul>
        //     {
        //       products.map(product => product.tags).filter(tags => tags == params)
        //       .map(ele => {
        //         return (
        //           <>
        //             <p>{ele}</p>
        //           </>
        //         )
        //       })
        //     }
        //   </ul>
        // ) 
        (
          <ul>
            {
              products.map(product => {
                if (product.tags == params) {
                  return (
                    <>
                      <GridItemsDisplay product={product} />
                    </>
                  )
                } 
              })
            }
          </ul>
        )
        : "error"
      }
    </>
  )
}
