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
        //       products.map(product => product.tags)
        //               .filter(tag => tag == params)
        //               .map((item) => {
        //         return (
        //           <>
        //             <GridItemsDisplay product={item}/>
        //           </>
        //         )
        //       })
        //     }
        //   </ul>
        // ) 
        (
          <ul>
            {
              products.map(product => product.tags).filter(tags => tags == params)
              .map(ele => {
                return (
                  <>
                    <p>{ele}</p>
                  </>
                )
              })
            }
          </ul>
        ) 
        : "error"
      }
    </>
  )
}
