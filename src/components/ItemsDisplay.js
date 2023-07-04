

export default function ItemsDisplay ({products}) {
  return (
    <>
      <h1>
        ItemsDisplay
      </h1>
      <div>
        {
          products ? (
          <ul>
            {
              products.map((product) => {
                return (
                  <>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                  </>
                )
              })
            }
          </ul>
        ) : <p>No items to display</p>
        }
      </div>
    </>
  )
}