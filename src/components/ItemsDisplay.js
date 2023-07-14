import GridItemsDisplay from "./GridItemsDisplay"


export default function ItemsDisplay ({products}) {
  return (
    <>
      <div>
        {
          products ? (
          <ul class='grid grid-rows-4 grid-cols-3 gap-4'>
            {
              products.map((product) => {
                return (
                  <div key={product.id}>
                    <GridItemsDisplay product={product} />
                  </div>
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