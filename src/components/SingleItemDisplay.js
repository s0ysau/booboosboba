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
                  <div key={product._id}>
                    <img src={process.env.PUBLIC_URL + `${product.img}`} alt={product.name} className="w-25 h-30"/>
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