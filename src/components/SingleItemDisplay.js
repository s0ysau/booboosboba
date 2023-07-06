import { useParams } from "react-router-dom"


export default function SingleItemDisplay ({products}) {
  const {params} = useParams()
  return (
    <>
      {
        products ? 
        (
          <section>
            {
              products.filter(products => products.params == params).map((product) => {
                return (
                  <div key={product.id}>
                    <img src={product.img} alt={product.name} class="w-25 h-30"/>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <h2>{product.price}</h2>
                  </div>
                )
              })
            }
          </section>
        ) : "Error"
      }
    </>
  )
}